import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const storeSlice = createSlice({
  name: 'store',
  initialState: {
    products: [],

  },
  reducers: {
    addProduct: (state, action) => {
      const isAlreadyStored = state.products.find((item) => item.id === action.payload.id);
      if (!isAlreadyStored) {
        if (state.products.length >= 2) {
          state.products.shift(); // Remove the first product if more than 2 items
        }
        toast.success("product added to cart")
        state.products.push(action.payload);
      }else{
        toast.warning("already in cart")
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, clearProducts } = storeSlice.actions;
export default storeSlice.reducer;
