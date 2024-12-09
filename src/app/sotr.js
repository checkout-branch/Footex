import { configureStore } from '@reduxjs/toolkit';
import  storeSlice   from './features/productSlice';


const store = configureStore({
  reducer: {
    store: storeSlice,
  },
});

export default store;
