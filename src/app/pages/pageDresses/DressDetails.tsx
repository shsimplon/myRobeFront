import React, { useEffect, useState } from 'react';
import CardDress from './CardDress';
import { dress, dressesStore } from '../../../types/dress';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavigationComponent from '../../components/molecules/navigation/Navigation';

const DressDetails = () => {
  const dressState = useSelector(
    (state: { dress: dressesStore }) => state.dress,
  );
  const dresses = dressState.dress;
  const { id } = useParams();

  const productClicked = dresses.findIndex(obj => obj.id === id);

  return (
    <>
      <NavigationComponent />
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
            Taille: {dresses && dresses[productClicked].size}
          </p>
          <p className="info-description">
            {' '}
            Description: {dresses && dresses[productClicked].description}
          </p>
        </div>
        {/* <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantité</label>
          <input
            type="number"
            id="quanitity"
            value={nbMugs}
            onChange={updateMugs}
          />
          <button>Ajouter au panier</button>
          <span 
          ref={addingInfo}
          className="adding-info"></span>
        </form> */}
      </div>
    </>
  );
};
export default DressDetails;
