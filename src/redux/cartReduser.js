import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    createProduct(state, action) {
      state.push(action.payload);
    },
    deleteProduct(state, action) {
      return state.filter((item) => item.name !== action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { createProduct, deleteProduct } = actions;
export default reducer;
