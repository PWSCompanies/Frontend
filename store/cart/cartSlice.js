// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../components/eccormerce/cart/MockData";

const initialState = {
  items: productData.map((product) => ({ ...product, quantity: 1 })), // Initialize with product data
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateProductData: (state, action) => {
      state.items = action.payload.map((product) => ({
        ...product,
        quantity: 1,
      }));
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, deleteItem, updateProductData} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartSubtotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const cartReducer = cartSlice.reducer;
