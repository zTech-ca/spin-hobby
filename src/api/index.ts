import axios from "axios";
import { homeData, productData } from "../dummy";
import {
  ECurrencies,
  ILogin,
  ICartItem,
  IMerchPreview,
  IAnimeSeries,
  ICharacter,
} from "../ts";
import { IHomeData } from "../view/pages/Home";
import { IProductData } from "../view/pages/Product";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://spinhobby.herokuapp.com/"
    : "http://localhost:8001/";

export function loadInitialData() {}

export async function getCurrencyConversion(
  base: ECurrencies,
  conversion: ECurrencies
): Promise<number> {
  if (base === conversion) return new Promise((resolve) => resolve(1));
  const data = await axios.get(
    `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${conversion}`
  );
  return data.data.rates[conversion];
}

export function getHomeData(): Promise<IHomeData> {
  return axios.get(`${serverUrl}api/v1/home`).then((response) => response.data);
}

export function getProductData(): Promise<IProductData> {
  return new Promise((resolve) => resolve(productData));
}

export function getSearchResult(
  page: number,
  searchString: string,
  category?: string
): Promise<IMerchPreview[]> {
  // Check if user wants to use real Square data
  const dataSource = localStorage.getItem("dataSource");
  const useSquareData = dataSource === "square";

  // Use different endpoint based on data source preference
  const baseEndpoint = useSquareData
    ? `${serverUrl}api/v1/square-catalog/search`
    : `${serverUrl}api/v1/search`;

  const params = new URLSearchParams({
    q: searchString,
    page: page.toString(),
    limit: "20",
  });

  if (category && category !== "All Categories") {
    params.append("category", category);
  }

  // Add source parameter for regular search API
  if (!useSquareData) {
    params.append("source", "all");
  }

  return axios
    .get(`${baseEndpoint}?${params.toString()}`)
    .then((response) => {
      if (response.data.success) {
        return response.data.data.map((item: any) => ({
          id: item.id,
          title: item.title || item.name,
          name: item.name,
          description: item.description,
          img: item.images?.[0] || item.img || "",
          images: item.images || [],
          price: item.price,
          originalPrice: item.originalPrice,
          discountPercentage: item.discountPercentage,
          variations: item.variations || [],
          categories: item.categories || [],
          isFeatured: item.isFeatured || false,
          isNewArrival: item.isNewArrival || false,
          isPreorder: item.isPreorder || false,
          source:
            item.source || (useSquareData ? "square-catalog" : "database"),
        }));
      }
      return [];
    })
    .catch((error) => {
      console.error("Search API error:", error);
      // Fallback to dummy data if Square API fails
      if (useSquareData) {
        console.log("Falling back to dummy data due to Square API error");
        return getSearchResult(page, searchString, category);
      }
      return [];
    });
}

export function requestLogin(login: ILogin) {
  return axios.post(`${serverUrl}login`, login);
}

export function fetchCart(): Promise<ICartItem[]> {
  return axios.get("http://localhost:8001/cart");
}

export function updateCart(payload: {
  product_id: number;
  delta: number;
  quantity: number;
  operation: string;
}) {
  return () => {
    return axios({
      method: "post",
      url: `http://localhost:8001/cart/${payload.product_id}`,
      data: payload,
      withCredentials: true,
    });
  };
}

export async function authenticateBetaUser({ username, password }: ILogin) {
  return axios
    .post("https://us-central1-spin-hobby.cloudfunctions.net/api/loginBeta", {
      username,
      password,
    })
    .then(({ data }) => data);
}

// HYBRID AUTHENTICATION SYSTEM
// Custom authentication for anime-specific features + Square integration for orders

// Custom Authentication (Primary)
export async function registerUser(userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  favoriteGenres?: string[];
  favoriteSeries?: string[];
}) {
  try {
    // Create user in Supabase with anime preferences
    const response = await axios.post(
      `${serverUrl}api/v1/auth/register`,
      userData
    );

    // Optionally create corresponding Square customer for future orders
    if (response.data.success) {
      await createSquareCustomer({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        userId: response.data.user.id,
      });
    }

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

export async function loginUser(credentials: {
  email: string;
  password: string;
}) {
  try {
    // Authenticate against your custom backend
    const response = await axios.post(
      `${serverUrl}api/v1/auth/login`,
      credentials
    );

    // Store JWT token
    if (response.data.token) {
      localStorage.setItem("spinHobby_token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
    }

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function getUserProfile(userId: string) {
  try {
    // Get full user profile with anime preferences
    const response = await axios.get(
      `${serverUrl}api/v1/users/${userId}/profile`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

export async function updateUserAnimePreferences(
  userId: string,
  preferences: {
    favoriteGenres?: string[];
    favoriteSeries?: string[];
    favoriteCharacters?: string[];
    collectingInterests?: string[]; // figures, plushies, keychains, etc.
    budgetRange?: string;
    notifications?: {
      newReleases: boolean;
      priceDrops: boolean;
      restocks: boolean;
      conventions: boolean;
    };
  }
) {
  try {
    const response = await axios.put(
      `${serverUrl}api/v1/users/${userId}/preferences`,
      preferences
    );
    return response.data;
  } catch (error) {
    console.error("Error updating preferences:", error);
    throw error;
  }
}

// Square Integration (Secondary - for orders and payments)
export async function createSquareCustomer(customerData: {
  email: string;
  firstName: string;
  lastName: string;
  userId: string; // Link to your custom user ID
}) {
  try {
    // Create customer in Square for order processing
    const response = await axios.post(
      `${serverUrl}api/v1/square/customers`,
      customerData
    );

    // Link Square customer ID back to your user record
    await axios.put(
      `${serverUrl}api/v1/users/${customerData.userId}/square-customer`,
      {
        squareCustomerId: response.data.customerId,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating Square customer:", error);
    // Non-critical error - user can still use the site
    return null;
  }
}

export async function syncUserWithSquare(userId: string) {
  try {
    // Sync user data between your system and Square
    const response = await axios.post(
      `${serverUrl}api/v1/users/${userId}/sync-square`
    );
    return response.data;
  } catch (error) {
    console.error("Error syncing with Square:", error);
    return null;
  }
}

// User Wishlist & Anime-Specific Features
export async function addToWishlist(userId: string, productId: string) {
  try {
    const response = await axios.post(
      `${serverUrl}api/v1/users/${userId}/wishlist`,
      {
        productId,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    throw error;
  }
}

export async function getUserWishlist(userId: string) {
  try {
    const response = await axios.get(
      `${serverUrl}api/v1/users/${userId}/wishlist`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return [];
  }
}

export async function getPersonalizedRecommendations(userId: string) {
  try {
    // Get recommendations based on user's anime preferences
    const response = await axios.get(
      `${serverUrl}api/v1/users/${userId}/recommendations`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
}

export async function trackUserBehavior(
  userId: string,
  action: {
    type: "view_product" | "add_to_cart" | "wishlist" | "search";
    productId?: string;
    seriesId?: string;
    searchTerm?: string;
    metadata?: any;
  }
) {
  try {
    // Track user behavior for recommendations
    await axios.post(`${serverUrl}api/v1/users/${userId}/behavior`, action);
  } catch (error) {
    // Non-critical - don't block user experience
    console.error("Error tracking behavior:", error);
  }
}

// Anime-specific API functions for future NodeJS backend
export async function getAnimeSeriesList(): Promise<IAnimeSeries[]> {
  try {
    // Future: Connect to NodeJS backend
    const response = await axios.get(`${serverUrl}api/v1/series`);
    return response.data;
  } catch (error) {
    console.error("Error fetching anime series:", error);
    return [];
  }
}

export async function getCharactersBySeries(
  seriesId: string
): Promise<ICharacter[]> {
  try {
    // Future: Connect to NodeJS backend
    const response = await axios.get(
      `${serverUrl}api/v1/series/${seriesId}/characters`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}

export async function searchProductsByAnime(filters: {
  series?: string;
  character?: string;
  productType?: string;
  priceRange?: { min: number; max: number };
  inStock?: boolean;
  preorder?: boolean;
}): Promise<IMerchPreview[]> {
  try {
    // Future: Advanced anime merchandise search
    const response = await axios.get(`${serverUrl}api/v1/products/search`, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
}

export async function syncSquareInventory(): Promise<void> {
  try {
    // Future: Sync product data from Square to Supabase
    await axios.post(`${serverUrl}api/v1/admin/sync-square`);
  } catch (error) {
    console.error("Error syncing Square inventory:", error);
  }
}

export async function getPreorderItems(): Promise<IMerchPreview[]> {
  try {
    // Future: Get upcoming preorder items
    const response = await axios.get(`${serverUrl}api/v1/products/preorders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching preorders:", error);
    return [];
  }
}

export async function getPopularBySeries(
  seriesId?: string
): Promise<IMerchPreview[]> {
  try {
    // Future: Get popular items, optionally filtered by series
    const url = seriesId
      ? `${serverUrl}api/v1/products/popular?series=${seriesId}`
      : `${serverUrl}api/v1/products/popular`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular items:", error);
    return [];
  }
}

// Square-specific integration functions
export async function createSquareOrder(orderData: any) {
  try {
    // Future: Process order through Square
    const response = await axios.post(
      `${serverUrl}api/v1/orders/square`,
      orderData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating Square order:", error);
    throw error;
  }
}

export async function getSquareInventoryStatus(productIds: string[]) {
  try {
    // Future: Real-time inventory check from Square
    const response = await axios.post(`${serverUrl}api/v1/inventory/check`, {
      productIds,
    });
    return response.data;
  } catch (error) {
    console.error("Error checking inventory:", error);
    return {};
  }
}

// Social Authentication Options
export async function loginWithGoogle() {
  try {
    // Google OAuth login
    window.location.href = `${serverUrl}api/v1/auth/google`;
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
}

export async function loginWithDiscord() {
  try {
    // Discord OAuth - popular in anime communities
    window.location.href = `${serverUrl}api/v1/auth/discord`;
  } catch (error) {
    console.error("Discord login error:", error);
    throw error;
  }
}

// export function addToCart(product_id: number) {
//   return axios.post(`http://localhost:8001/cart/add/${product_id}`);
// }

// export function removeFromCart(product_id: number) {
//   return axios.post(`http://localhost:8001/cart/remove/${product_id}`);
// }
