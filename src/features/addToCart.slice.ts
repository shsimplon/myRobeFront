import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDressToCart: (state, action) => {
      const indexItemAdd = state.cart.findIndex(
        obj => obj.id === action.payload.id,
      );
      //check when if object in cart
      if (indexItemAdd !== -1) {
        const updatedQuantity = {
          ...state.cart[indexItemAdd],
          quantity: state.cart[indexItemAdd].quantity + action.payload.quantity,
        };

        const newArr = [...state.cart];
        newArr.splice(indexItemAdd, 1, updatedQuantity);

        return {
          cart: newArr,
        };
      } else {
        const newArray = [...state.cart];
        newArray.push(action.payload);
        return {
          cart: newArray,
        };
      }
    },
    updateChoopingCart: (state, action) => {
      const indexItemAdd = state.cart.findIndex(
        obj => obj.id === action.payload.id,
      );
      const newArr = [...state.cart];
      newArr.splice(indexItemAdd, 1, action.payload);
      return {
        cart: newArr,
      };
    },
    deletObjectCart: (state, action) => {
      const dressDelected = state.cart.filter(
        obj => obj.id !== action.payload.id,
      );

      return {
        cart: dressDelected,
      };
    },
  },
});

export const { addDressToCart, updateChoopingCart, deletObjectCart } =
  cartSlice.actions;
export default cartSlice.reducer;
