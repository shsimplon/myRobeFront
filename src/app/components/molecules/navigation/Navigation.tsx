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
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const userState = useSelector((state: { user: userStore }) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers();
  }, []);

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

  useEffect(() => {}, []);

  return (
    <Navigation>
      <div style={{ display: 'flex', gap: '50px' }}>
        <Link to="/">
          <img src="/logo.png" alt="image logo" id="image" />
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/dress/favoris">
          <img
            alt="icon-corbeille"
            id="image-navigation"
            src="https://static.overlay-tech.com/assets/dd011da0-9f6a-4023-9d03-f71c4f8b1f9f.svg"
          />
        </Link>
        <Link to="dress/panier">
          <img
            id="image-navigation"
            alt="icon-panier"
            src="https://static.overlay-tech.com/assets/cdb01ef3-6f67-477a-a321-2f3877f665fc.svg"
          />
        </Link>

        <Link to="/authentification">
          <img
            id="image-navigation"
            alt="icon-profil"
            src="https://static.overlay-tech.com/assets/42a6309f-f647-42fb-b109-44552601b9de.svg"
          />
        </Link>
        {userState.user && (
          <HiOutlineLogout
            style={{ color: '#BB8A5D', fontSize: '1.7rem', cursor: 'pointer' }}
            onClick={logoutUser}
          />
        )}
      </div>
    </Navigation>
  );
};

export default NavigationComponent;
