import { configureStore } from '@reduxjs/toolkit';
import starWarsReducer from '../features/sw/starWarsSlice';

export const store = configureStore({
  reducer: {
    stars: starWarsReducer,
  },
});
