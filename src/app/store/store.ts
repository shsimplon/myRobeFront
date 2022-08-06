import { configureStore } from '@reduxjs/toolkit';
import dressesReducer from '../../features/dresses.slice';
import userReducer from '../../features/user.slice';
import cartReducer from '../../features/addToCart.slice';

export default configureStore({
  reducer: {
    dress: dressesReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
