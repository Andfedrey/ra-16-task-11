import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
  factsArr: [
    'прообразом Чубакки стал пёс режиссёра',
    'актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
  ]
};
export const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      const {payload: num} = action;
      if(num > 5) {
        state.value = 5;
      } else if (num < 1) {
        state.value = 1;
      } else {
        state.value = num
      }
    }
  },
});
export const { addNumber } = starWarsSlice.actions;
export default starWarsSlice.reducer;
