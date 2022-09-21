import { deleteDress, getAll, postDress, updateDress } from './dressService';
import { getReserveDress, reserveDress } from './reserveService';
import { signIn, getAllUsers, isAuth, logout, signUp } from './userService';

export const dressService = { getAll, postDress, updateDress, deleteDress };
export const userServices = { signIn, getAllUsers, isAuth, logout, signUp };
export const reserveService = { reserveDress, getReserveDress };
