import React, { useState } from 'react';
import { reserveService } from 'services';
import { useSelector } from 'react-redux';
import { user, userStore } from '../../../types/user';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { notifyError, notifySuccess } from 'utils/toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { dress } from 'types/dress';

const AddReservation = ({ setIsOpen }) => {
  let navigate = useNavigate();
  const [date_departure, setdate_departure] = useState('');
  const [return_date, setreturn_date] = useState('');
  const [message, setMessage] = useState('');
  let userState = useSelector((state: { user: userStore }) => state.user);
  let userId = userState.user?.id && userState.user?.id;
  const cartStore = useSelector((state: { cart: any }) => state.cart);
  const dressId = cartStore.cart[0].id && cartStore.cart[0].id;

  const dressQuantity =
    cartStore.cart[0].quantity && cartStore.cart[0].quantity;

  const submitReservation = async e => {
    e.preventDefault();
    if (!userId) {
      notifyError('vous devez vous connectez!');
      navigate('/authentification');
    } else if (date_departure === '' || return_date === '') {
      setMessage('vous devez remplir les champs');
    } else
      try {
        const data = {
          date_departure,
          return_date,
          userId: userId,
          dressId: dressId,
          quantity: dressQuantity,
        };
        await reserveService.reserveDress(data);
        notifySuccess(
          'votre réservation est confirmée, vous pouvez venir la chercher au magasin! ',
        );
      } catch (error) {
        throw error;
      }
  };

  return (
    <div className="modaleReservation">
      <AiOutlineCloseCircle
        className="closeModale"
        onClick={() => setIsOpen(false)}
      ></AiOutlineCloseCircle>
      <br />
      date de départ:{' '}
      <input
        type="date"
        name="date de départ"
        id="date de départ"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setdate_departure(e.target.value)
        }
      />
      <br />
      date de retour:{' '}
      <input
        type="date"
        name=" date de retour"
        id=" date de retour"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setreturn_date(e.target.value)
        }
      />
      <br />
      <span style={{ color: 'red' }}>{message} </span>
      <br />
      <button
        className="btn-cart"
        onClick={data => {
          submitReservation(data);
        }}
      >
        louer
      </button>
    </div>
  );
};

export default AddReservation;
