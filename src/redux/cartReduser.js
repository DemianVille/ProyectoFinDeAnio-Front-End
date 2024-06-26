import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    deleteProduct(state, action) {
      return state.filter((item) => item.name !== action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProduct, deleteProduct } = actions;
export default reducer;
