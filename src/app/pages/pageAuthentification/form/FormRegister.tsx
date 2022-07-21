import Button from 'app/components/atoms/button/Button';
import FormMolecule from 'app/components/molecules/label-input/FormsMolecule';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userServices } from 'services';
import { notifySuccess } from 'utils/toastify';
import { userComplete } from '../../../../types/user';
import { useHistory } from 'react-router-dom';
import FormLogin from './FormLogin';

const Form = signup => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  //   const [role, setRole] = useState('user');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleClick = async e => {
    e.preventDefault();
    try {
      const role = '';
      if (email === '' || email == null) {
        setMessage('Email est invalid');
        setError(true);
      } else if (username === '' || username == null) {
        setMessage('Prénom est invalid');
        setError(true);
      } else if (password === '' || password == null) {
        setMessage('Prénom est invalid');
        setError(true);
      } else {
        setMessage('');
        setError(false);
      }

      const response = await userServices.signUp({
        username,
        address,
        phone,
        email,
        password,
        role,
      });
      const user = response.data;
      notifySuccess('Votre compte est enregistré, veuillez vous connectez!');
      <FormLogin />;
      //   history.push('/authentification');
    } catch (error: any) {
      setError(true);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <form>
          <input
            id="name"
            type="name"
            name="Prenom"
            placeholder="Prénom"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type="address"
            name="Adresse"
            id="address"
            placeholder="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <input
            type="phone"
            name="Télephone"
            placeholder="Télephone"
            id="phone"
            value={phone}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPhone(e.target.value)}
          />
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
            onClick={e => handleClick(e)}
          >
            {' '}
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
