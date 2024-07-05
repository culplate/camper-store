const { createSlice } = require("@reduxjs/toolkit");
const { fetchCampers } = require("./operations");

const handlePending = (state) => {
  state.loading = true;
  state.isError = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.isError = true;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = false;
  state.error = null;
  state.items = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, handleFulfilled)
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
