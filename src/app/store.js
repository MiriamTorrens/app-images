import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import allPhotosReducer from '../slices/allPhotosSlice';
import myPhotosReducer from '../slices/myPhotosSlice'

export const store = configureStore({
  reducer: {
    allPhotos:allPhotosReducer,
    myPhotos: myPhotosReducer
  },
  middleware: getDefaultMiddleware =>  getDefaultMiddleware({    serializableCheck: false,  })
});
