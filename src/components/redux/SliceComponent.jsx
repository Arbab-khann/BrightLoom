// src/features/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    markItemDone: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((itemdata) => itemdata.id === itemId);
      if (item) {
        item.isDone = true;
      }
    },
  },
});

export const { addItem, markItemDone } = cartSlice.actions;
export const selectCartItems = (state) => state.data.items;
export default cartSlice.reducer;
