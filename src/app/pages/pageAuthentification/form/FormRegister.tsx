/* eslint-disable no-self-compare */
import Button from 'app/components/atoms/button/Button';
import FormMolecule from 'app/components/molecules/label-input/FormsMolecule';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userServices } from 'services';
import { notifyError, notifySuccess } from 'utils/toastify';
import { userComplete } from '../../../../types/user';
import FormLogin from './FormLogin';

const Form = signup => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  //   const [role, setRole] = useState('user');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messageUsername, setMessageUsername] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const dispatch = useDispatch();
  let regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const handleClick = async e => {
    e.preventDefault();
    try {
      const role = '';
      if (email === '' || email === null) {
        setMessageEmail('Email est obligatoire ');
        setError(true);
      } else if (!regexEmail.test(email)) {
        return notifyError(
          'veuillez rentrer un email valide: example@example.(com,fr,org...)',
        );
      } else if (!passw.test(password)) {
        return notifyError(
          ' Le mot de passe doit comporter  6 à 20 caractères contenant au moins un chiffre , une majuscule et une lettre minuscule',
        );
      } else if (username === '' || username == null) {
        setMessageUsername('Prénom est obligatoire');
        setError(true);
      } else if (password === '' || password == null) {
        setMessagePassword('Mot de passe est obligatoire');
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

      notifySuccess('Votre compte est enregistré, veuillez vous connectez!');
      <FormLogin />;
    } catch (error: any) {
      notifyError(error.response.data.message);
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
            placeholder="Prénom *"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />{' '}
          <span
            className="message-error"
            style={{ marginBottom: '1rem', display: error ? 'block' : 'none' }}
          >
            {messageUsername}
          </span>
          <input
            type="address"
            name="Adresse"
            id="address"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <input
            type="phone"
            name="Télephone"
            placeholder="Télephone"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <input
            type="email"
            required
            name="Email"
            placeholder="Email *"
            id="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span
            className="message-error"
            style={{ marginBottom: '1rem', display: error ? 'block' : 'none' }}
          >
            {' '}
            {messageEmail}
          </span>
          <input
            type="password"
            name="Mot de passe"
            placeholder="Mot de passe *"
            id="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span
            className="message-error"
            style={{ marginBottom: '1rem', display: error ? 'block' : 'none' }}
          >
            {messagePassword}{' '}
          </span>
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
