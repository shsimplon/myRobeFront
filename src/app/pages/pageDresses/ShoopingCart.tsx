/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletObjectCart, updateChoopingCart } from 'features/addToCart.slice';
import { AiOutlineDelete } from 'react-icons/ai';
import ModalReservation from '../reservation/ModalReservation';

const ShoopingCart = () => {
  const cartStore = useSelector((state: { cart: any }) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (e, id) => {
    //found index
    const indexObject = cartStore.cart.findIndex(obj => obj.id === id);
    //change object with new object added by user
    const objUpdated = {
      ...cartStore.cart[indexObject],
      quantity: Number(e.target.value),
    };
    // dispatch data
    dispatch(updateChoopingCart(objUpdated));
  };
  let totalPrice = 0;
  if (cartStore.cart.length !== 0) {
    for (const item of cartStore.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  const deleteDressOfCart = cart => {
    dispatch(deletObjectCart(cart));
  };

  return (
    <div>
      <div className="global-container">
        <p className="heading-cart">Votre panier :</p>
        <ul className="cart-list">
          {cartStore.cart.map(dress => (
            <li key={dress.id}>
              <img src={dress.image} alt=" dress image" />
              <div className="bloc-cart-infos">
                <h4>{dress.name}</h4>
                <p>Price: {dress.price}€</p>
                <AiOutlineDelete
                  style={{ color: '#BB8A5D', cursor: 'pointer' }}
                  onClick={() => {
                    deleteDressOfCart(dress);
                  }}
                ></AiOutlineDelete>
              </div>
              <div className="bloc-input">
                <label htmlFor="quantityInput">Quantité</label>
                <input
                  onChange={e => handleChange(e, dress.id)}
                  id="quantityInput"
                  type="number"
                  value={dress.quantity}
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="total-price">Total : {`${totalPrice.toFixed(2)}€`}</p>
        <ModalReservation />
      </div>
    </div>
  );
};

export default ShoopingCart;
