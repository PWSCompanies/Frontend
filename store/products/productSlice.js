import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  token: null,
  auth: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProducts: (state, data) => {
      [...state.products, data];
    },
  },
});

export const { createProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
