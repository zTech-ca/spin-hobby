import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchResult {}

export interface SearchState {
  results: SearchResult[];
}

const initialState: SearchState = {
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {},
    setSearch(state, action: PayloadAction<SearchResult[]>) {
      state.results = action.payload;
    },
  },
});

export const { search, setSearch } = searchSlice.actions;
export default searchSlice.reducer;
