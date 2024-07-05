import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.items.push(action.payload);
    },
    removeFavorite(state, action) {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(idx, 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
