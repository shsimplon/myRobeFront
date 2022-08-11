import React, { useState } from 'react';
import { reserveService } from 'services';
import { useSelector } from 'react-redux';
import { user, userStore } from '../../../types/user';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const AddReservation = ({ setIsOpen }) => {
  const [date_departure, setdate_departure] = useState('');
  const [return_date, setreturn_date] = useState('');
  const [quantity, setquantity] = useState();
  const userState = useSelector((state: { user: userStore }) => state.user);
  const userId = userState.user?.id;
  console.log('userId', userId);
  const cartStore = useSelector((state: { cart: any }) => state.cart);
  const dressId = cartStore.cart[0].id && cartStore.cart[0].id;
  const dressQuantity =
    cartStore.cart[0].quantity && cartStore.cart[0].quantity;

  const submitReservation = async e => {
    e.preventDefault();
    const data = {
      date_departure,
      return_date,
      userId: userId,
      dressId: dressId,
      quantity: dressQuantity,
    };
    await reserveService.reserveDress(data);
    console.log('data', data);
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
        name=""
        id=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setdate_departure(e.target.value)
        }
      />
      <br />
      date de retour:{' '}
      <input
        type="date"
        name=""
        id=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setreturn_date(e.target.value)
        }
      />
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
