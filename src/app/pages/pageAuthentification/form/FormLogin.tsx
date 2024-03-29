import { login } from 'features/user.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notifyError, notifySuccess } from 'utils/toastify';
import { userServices } from '../../../../services/index';

const FormLogin = props => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async e => {
    e.preventDefault();

    try {
      if (email === '' || password === '') {
        notifyError('Vous devez remplir tous les champs!');
      } else {
        const response = await userServices.signIn({ email, password });
        const user = response.data;
        dispatch(login(user));
        notifySuccess(`vous êtes connéctés: ${user.email}!`);
        if (user?.role === 'A') {
          navigate('/admin');
        } else navigate('/');
      }
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <form>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            id="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="Mot de passe"
            placeholder="Mot de passe"
            id="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="button"
            disabled={false}
            onClick={e => handleClick(e)}
          >
            {' '}
            Envoyer
          </button>
          <span
            style={{ color: 'red', display: error ? 'block' : 'none' }}
            data-testid="error"
          >
            Vous devez remplir tous les champs!
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
