import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getImages = createAsyncThunk(
    'allImages/fetchImages',
    async (query) => { 
      const client_id = "lIqNjrSa_Bj_ymf87r0N-0VGHp-BkD0-SsFQ0pJQc28";
      let url;
      if(query && query.length){
        url = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&per_page=20`;
      }else{
        url = `https://api.unsplash.com/photos/random?client_id=${client_id}&count=20`;
      }
      const response = await axios.get(url);
      if(query && query.length){
        return response.data.results;
      }
      return response.data;
    }
  );

  const initialState={
    searchResults:[]
  }
  export const allPhotosSlice = createSlice({
    name: 'results',
      initialState,
      reducers: {},
      extraReducers(builder) {
          builder.addCase(getImages.fulfilled, (state, action) => {
              state.searchResults = action.payload;
          })
      }
  })

  export default allPhotosSlice.reducer;
  export const results = state => state.allPhotos.searchResults;

  //RECUERDA MIRIAM MIRARLO EN FAVIMAGES
  // export const results = state => state.images.myFavImages;
  // export const results = state => state.results.myFavImages;