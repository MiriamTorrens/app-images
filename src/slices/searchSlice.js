import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getImages = createAsyncThunk(
  "allImages/fetchImages",
  async (query) => {
    const client_id = "lIqNjrSa_Bj_ymf87r0N-0VGHp-BkD0-SsFQ0pJQc28";
    let url;
    if (query && query.length) {
      url = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&per_page=16`;
    } else {
      url = `https://api.unsplash.com/photos/random?client_id=${client_id}&count=15`;
    }
    const response = await axios.get(url);
    if (query && query.length) {
      return response.data.results;
    }
    return response.data;
  }
);

const initialState = {
  searchResults: [],
};
export const searchSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.searchResults = action.payload;
      state.isLoading = false;
    });
  },
});

export default searchSlice.reducer;
export const results = (state) => state.allPhotos.searchResults;
