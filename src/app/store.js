import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import imagesReducer from '../slices/allImagesSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    images:imagesReducer
  },
});
