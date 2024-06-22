import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  country: [],
};

const CountrySlice = createSlice({
  name: "expertise",
  initialState,
  reducers: {
    CountryRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.country = [];
    },
    CountrySuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.country = action.payload;
    },
    CountryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.country = [];
    },
  },
});

export const CountryAction = CountrySlice.actions;
export default CountrySlice;
