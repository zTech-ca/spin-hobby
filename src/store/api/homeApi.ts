import { baseApi } from "./baseApi";
import { IHomeData } from "../../view/pages/Home";
import { IMerchPreview, IAnimeSeries, ICategory } from "../../ts";

// Home page API endpoints
export const homeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Main home page data
    getHomeData: builder.query<IHomeData, void>({
      query: () => "api/v1/home",
      providesTags: ["Home"],
    }),

    // Featured merchandise
    getFeaturedMerchandise: builder.query<IMerchPreview[], void>({
      query: () => "api/v1/products/featured",
      providesTags: ["Product"],
    }),

    // Popular by series
    getPopularBySeries: builder.query<IMerchPreview[], string | void>({
      query: (seriesId) => ({
        url: "api/v1/products/popular",
        params: seriesId ? { series: seriesId } : {},
      }),
      providesTags: ["Product"],
    }),

    // Categories
    getCategories: builder.query<ICategory[], void>({
      query: () => "api/v1/categories",
      providesTags: ["Category"],
    }),

    // Anime series list
    getAnimeSeries: builder.query<IAnimeSeries[], void>({
      query: () => "api/v1/series",
      providesTags: ["Series"],
    }),

    // Preorder items
    getPreorderItems: builder.query<IMerchPreview[], void>({
      query: () => "api/v1/products/preorders",
      providesTags: ["Product"],
    }),

    // New arrivals
    getNewArrivals: builder.query<IMerchPreview[], void>({
      query: () => "api/v1/products/new-arrivals",
      providesTags: ["Product"],
    }),

    // Square inventory sync (for admin use)
    syncSquareInventory: builder.mutation<
      { success: boolean; message: string },
      void
    >({
      query: () => ({
        url: "api/v1/admin/sync-square",
        method: "POST",
      }),
      invalidatesTags: ["Product", "Home"],
    }),

    // Search products by anime filters
    searchProductsByAnime: builder.query<
      IMerchPreview[],
      {
        series?: string;
        character?: string;
        productType?: string;
        priceRange?: { min: number; max: number };
        inStock?: boolean;
        preorder?: boolean;
        page?: number;
        limit?: number;
      }
    >({
      query: (filters) => ({
        url: "api/v1/products/search",
        params: filters,
      }),
      providesTags: ["Product"],
    }),
  }),
});

// Export hooks for components to use
export const {
  useGetHomeDataQuery,
  useGetFeaturedMerchandiseQuery,
  useGetPopularBySeriesQuery,
  useGetCategoriesQuery,
  useGetAnimeSeriesQuery,
  useGetPreorderItemsQuery,
  useGetNewArrivalsQuery,
  useSyncSquareInventoryMutation,
  useSearchProductsByAnimeQuery,
} = homeApi;
