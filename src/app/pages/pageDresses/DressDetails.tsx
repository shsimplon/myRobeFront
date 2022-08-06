import React, { useEffect, useState } from 'react';
import CardDress from './CardDress';
import { dress, dressesStore } from '../../../types/dress';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavigationComponent from '../../components/molecules/navigation/Navigation';
import { addDressToCart } from 'features/addToCart.slice';

const DressDetails = () => {
  const [nbDress, setNbDress] = useState(1);
  const dispatch = useDispatch();

  const dressState = useSelector(
    (state: { dress: dressesStore }) => state.dress,
  );
  const dresses = dressState.dress;
  const { id } = useParams();

  const productClicked = dresses.findIndex(obj => obj.id === id);

  const updateDress = e => {
    setNbDress(Number(e.target.value));
  };

  const addToCart = e => {
    e.preventDefault();
    const itemAdded = {
      ...dresses[productClicked],
      quantity: nbDress,
    };
    dispatch(addDressToCart(itemAdded));
  };

  return (
    <>
      <div className="dress-detail">
        <img
          //@ts-ignore
          src={dresses && dresses[productClicked].image}
          alt="img"
        ></img>

        <div className="dress-infos">
          <h2>{dresses && dresses[productClicked].name}</h2>
          <p className="info-price">
            {' '}
            Prix: {dresses && dresses[productClicked].price}€
          </p>
          <p className="info-taille">
            {' '}
            <strong> Taille</strong>: {dresses && dresses[productClicked].size}
          </p>
          <p className="info-description">
            {' '}
            <strong> Description </strong>:{' '}
            {dresses && dresses[productClicked].description}
          </p>

          <form className="form-detail" onSubmit={addToCart}>
            <label htmlFor="quantity"> </label>
            <strong> Quantité</strong>
            <input
              type="number"
              id="quanitity"
              value={nbDress}
              onChange={updateDress}
            />
            <button>Ajouter au panier</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default DressDetails;
