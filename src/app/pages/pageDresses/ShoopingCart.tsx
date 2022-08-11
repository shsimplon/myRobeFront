import NavigationComponent from 'app/components/molecules/navigation/Navigation';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletObjectCart, updateChoopingCart } from 'features/addToCart.slice';
import { deleteDress } from '../../../services/dressService';
import { AiOutlineDelete } from 'react-icons/ai';
import AddReservation from '../reservation/AddReservation';
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

  //   const deleteDressOfCart = id => {
  //     const indexObject = cartStore.cart.findIndex(data => {
  //       return data.id;
  //     });
  //     console.log('indexObject', indexObject);

  //     dispatch(deletObjectCart(indexObject));
  //   };

  return (
    <div>
      <div className="global-container">
        <p className="heading-cart">Votre panier :</p>
        <ul className="cart-list">
          {cartStore.cart.map(item => (
            <li key={item.id}>
              <img src={item.image} alt="" />
              <div className="bloc-cart-infos">
                <h4>{item.name}</h4>
                <p>Price: {item.price}€</p>
                {/* <AiOutlineDelete
                  style={{ color: '#BB8A5D' }}
                  onClick={id => {
                    deleteDressOfCart(id);
                  }}
                ></AiOutlineDelete> */}
              </div>
              <div className="bloc-input">
                <label htmlFor="quantityInput">Quantité</label>
                <input
                  onChange={e => handleChange(e, item.id)}
                  id="quantityInput"
                  type="number"
                  value={item.quantity}
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="total-price">Total : {`${totalPrice.toFixed(2)}€`}</p>
        {/* <AddReservation /> */}
        <ModalReservation />
      </div>
    </div>
  );
};

export default ShoopingCart;
