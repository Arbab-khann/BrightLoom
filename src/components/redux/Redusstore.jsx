// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./SliceComponent";

const store = configureStore({
  reducer: {
    data: cartSlice,
  },
});

export default store;
