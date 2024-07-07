import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: [],
  airConditioner: false,
  TV: false,
  kitchen: false,
  automatic: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { filterType } = action.payload;
      state[filterType] = !state[filterType];
    },
    setForm: (state, action) => {
      if (state.form.includes(action.payload)) {
        const idx = state.form.indexOf(action.payload);
        state.form.splice(idx, 1);
        return;
      } else {
        state.form.push(action.payload);
      }
    },
    clearFilters: (state) => {
      state.form = "";
      state.airConditioner = false;
      state.TV = false;
      state.kitchen = false;
      state.automatic = false;
    },
  },
});

export const { toggleFilter, setForm, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
