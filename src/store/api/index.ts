// Export all API slices and hooks
export { baseApi } from "./baseApi";
export {
  homeApi,
  useGetHomeDataQuery,
  useGetFeaturedMerchandiseQuery,
  useGetPopularBySeriesQuery,
  useGetCategoriesQuery,
  useGetAnimeSeriesQuery,
  useGetPreorderItemsQuery,
  useGetNewArrivalsQuery,
  useSyncSquareInventoryMutation,
  useSearchProductsByAnimeQuery,
} from "./homeApi";

// Re-export types
export type { IHomeData } from "../../view/pages/Home";
export type {
  IMerchPreview,
  IGroupedMerchPreview,
  ICategory,
  IAnimeSeries,
  ICharacter,
  IManufacturer,
} from "../../ts";
