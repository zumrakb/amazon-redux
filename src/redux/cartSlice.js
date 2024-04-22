import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      /* check if the product that we received is already on the product array. */
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      /* find the product removing the array  */
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );

      /* remove the quantity of that product from product number */

      state.productsNumber = state.productsNumber - productToRemove.quantity;

      /* find the index of the product removing */
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );

      /* remove from array. */
      state.products.splice(index, 1);
    },
    increase: (state, action) => {
      const productFind = state.products.find(
        (product) => product.id === action.payload
      );

      productFind.quantity++;

      state.productsNumber++;
    },
    decrease: (state, action) => {
      const productFind = state.products.find(
        (product) => product.id === action.payload
      );

      console.log(action.payload);

      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (productFind.quantity === 1) {
        state.products.splice(index, 1);
      }

      productFind.quantity--;

      state.productsNumber--;
    },
  },
});

export const { addToCart, removeFromCart, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
