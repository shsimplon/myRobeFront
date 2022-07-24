import Home from 'app/components/templates/Home';
import { logout } from 'features/user.slice';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userServices } from 'services';
import { userStore } from 'types/user';

export function AccueilPage() {
  let navigate = useNavigate();

  const [users, setUsers] = React.useState([]);

  const userState = useSelector((state: { user: userStore }) => state.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getUsers();
  }, []);

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
    <>
      <Helmet>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Home />
    </>
  );
}
