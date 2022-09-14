/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { logout } from 'features/user.slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userServices } from 'services';
import { userStore } from 'types/user';
import { HiOutlineLogout } from 'react-icons/hi';
import { Navigation, MenuBurger } from './navigation.style';
import { notifySuccess } from 'utils/toastify';

const NavigationComponent = () => {
  let totalDress = 0;
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const userState = useSelector((state: { user: userStore }) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers();
  }, []);

  const shoppingCart = useSelector((state: { cart: any }) => state.cart);
  const totalItems = () => {
    for (const item of shoppingCart.cart) {
      totalDress += item.quantity;
    }
  };
  totalItems();
  const logoutUser = async () => {
    const user = await userServices.logout();
    await dispatch(logout());
    navigate('/');
    notifySuccess(`Vous êtes hors ligne !`);
  };

  const getUsers = async () => {
    try {
      const response = await userServices.getAllUsers();
      setUsers(response.data);
    } catch (error: any) {
      if (error.hasRefreshedToken) getUsers();
      else {
        dispatch(logout());
        navigate('/');
      }
    }
  };

  return (
    <Navigation>
      <div className="navbarContainer">
        <nav className="navbar">
          <a href="/" className=" logo">
            Dressline
          </a>
          <a href="/dress/favoris" className="navbar-link">
            Robes
          </a>
          <a href="/panier" className="navbar-link">
            Panier
            <span className="notif">{totalDress}</span>
          </a>
          <a href="/authentification" className="navbar-link">
            Connexion
          </a>
          {userState.user && (
            <HiOutlineLogout
              style={{
                color: '#BB8A5D',
                fontSize: '1.7rem',
                cursor: 'pointer',
              }}
              onClick={logoutUser}
            />
          )}
        </nav>
        <div className="floating-bg"></div>
      </div>
    </Navigation>
  );
};

export default NavigationComponent;
