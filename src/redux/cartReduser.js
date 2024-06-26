import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      const item = state.find((i) => i.id === action.payload.id);
      if (!state.some((i) => i.id === action.payload.id)) {
        state.push(action.payload);
      } else {
        item.qty += action.payload.qty;
      }
    },
    addQty(state, action) {
      const item = state.find((i) => i.id === action.payload.id);
      action.payload.qty += 1;
    },
    subQty(state, action) {
      const item = state.find((i) => i.id === action.payload.id);
      action.payload.qty += 1;
    },
    deleteProduct(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProduct, addQty, subQty, deleteProduct } = actions;
export default reducer;
