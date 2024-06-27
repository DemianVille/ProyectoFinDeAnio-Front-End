import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      const item = state.find((i) => i.id === product.id);
      if (!state.some((i) => i.id === product.id)) {
        state.push(product);
      } else {
        item.qty += product.qty;
      }
    },
    addOne(state, action) {
      const id = action.payload;
      const item = state.find((i) => i.id === id);
      if (item.stock > item.qty) {
        item.qty += 1;
      }
    },
    decreaseOne(state, action) {
      const id = action.payload;
      const item = state.find((i) => i.id === id);
      if (item.qty > 1) {
        item.qty -= 1;
      }
    },
    deleteProduct(state, action) {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProduct, addOne, decreaseOne, deleteProduct } = actions;
export default reducer;
