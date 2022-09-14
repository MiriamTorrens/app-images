import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import searchReducer from "../slices/searchSlice";
import collectionSlice from "../slices/collectionSlice";

export const store = configureStore({
  reducer: {
    allPhotos: searchReducer,
    myPhotos: collectionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
