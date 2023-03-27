import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPhotos: [],
  isLoading: false,
};

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.allPhotos.push(action.payload);
    },
    getPhoto: (state) => state.value,
  },
});

export const {
  addPhoto,
  getPhoto,
} = photoSlice.actions;

export default photoSlice.reducer;
