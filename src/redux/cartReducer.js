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
      } else if (item && product.color === item.color) {
        item.qty += product.qty;
      } else if (!state.some((i) => i.color === product.color)) {
        state.push(product);
      } else if (item && product.color !== item.color) {
        const itemColor = state.find((i) => i.color === product.color);
        itemColor.qty += product.qty;
      }
    },
    addOne(state, action) {
      const { id, color } = action.payload;
      const itemToAdd = state.find((i) => i.id === id && i.color === color);
      if (itemToAdd.stock > itemToAdd.qty) {
        itemToAdd.qty += 1;
      }
    },
    decreaseOne(state, action) {
      const { id, color } = action.payload;
      const itemToDecrease = state.find(
        (i) => i.id === id && i.color === color
      );
      if (itemToDecrease.qty > 1) {
        itemToDecrease.qty -= 1;
      }
    },
    deleteProduct(state, action) {
      const { id, color } = action.payload;
      const itemToDelete = state.find((i) => i.id === id && i.color === color);
      return state.filter(
        (item) =>
          !(item.id === itemToDelete.id && item.color === itemToDelete.color)
      );
    },
    cleanCart(state, action) {
      const initialState = [];
      return initialState;
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addProduct, addOne, decreaseOne, deleteProduct, cleanCart } =
  actions;
export default reducer;
