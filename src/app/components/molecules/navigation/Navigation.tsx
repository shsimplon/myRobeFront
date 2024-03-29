/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { logout } from 'features/user.slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userServices } from 'services';
import { userStore } from 'types/user';
import { HiOutlineLogout } from 'react-icons/hi';
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
    <div className="navbarContainer">
      <nav className="navbar">
        <Link to="/" className=" logo">
          Dressline
        </Link>

        <a href="#dressList" className="navbar-link">
          Robes
        </a>
        <Link to="/panier" className="navbar-link">
          <span>Panier</span>

          <div className="notif">{totalDress}</div>
          <img
            style={{ width: '22px', height: '24px' }}
            id="image-navigation"
            alt="icon-panier"
            src="https://static.overlay-tech.com/assets/cdb01ef3-6f67-477a-a321-2f3877f665fc.svg"
          />
        </Link>

        <Link to="/authentification" className="navbar-link">
          <span>Se Connecter</span>
          <img
            style={{ width: '22px', height: '24px' }}
            id="image-navigation"
            alt="icon-profil"
            src="https://static.overlay-tech.com/assets/42a6309f-f647-42fb-b109-44552601b9de.svg"
          />
        </Link>
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
  );
};

export default NavigationComponent;
