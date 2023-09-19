import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMerchPreview } from "../ts";

export interface ISearchState {
  page: number;
  searchResult: IMerchPreview[];
  error: string;
}

const initialState: ISearchState = {
  page: 0,
  searchResult: [],
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearch: (
      state,
      action: PayloadAction<{ page: number; searchString: string }>
    ) => {},
    setSearchResult: (state, action) => {
      state.page = action.payload.page;
      state.searchResult = action.payload.searchResult;
    },
    setSearchError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getSearch, setSearchResult, setSearchError } =
  searchSlice.actions;

export default searchSlice.reducer;
