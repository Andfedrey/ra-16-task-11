import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import photosSlice from '../features/photos/photosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    photos: photosSlice,
  },
});
