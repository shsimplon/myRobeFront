import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user, userStore } from 'types/user';

const initialState: userStore = {
  user: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    login: (state, action: PayloadAction<user>) => {
      const user = action.payload;

      state.user = user;
      state.isLogged = true;
    },
    logout: state => {
      state.user = null;
      state.isLogged = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
