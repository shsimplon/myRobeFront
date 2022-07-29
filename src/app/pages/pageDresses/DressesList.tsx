/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDresses } from 'features/dresses.slice';
import { dressService } from 'services';
import { dressesStore } from 'types/dress';
import CardDress from './CardDress';
import Form from 'app/components/organisms/form_card';
const DressesList = () => {
  const dispatch = useDispatch();

  const dressState = useSelector(
    (state: { dress: dressesStore }) => state.dress.dress,
  );

  useEffect(() => {
    dressService.getAll().then(res => dispatch(getDresses(res.data)));
  }, []);

  return (
    <>
      <Form getDresses={getDresses} />
      <br />
      <h3>Liste de robes</h3>

      <div className="cards-container">
        {dressState &&
          dressState.map((dress, key) => (
            <CardDress key={dress.id} dress={dress} />
          ))}
      </div>
    </>
  );
};

export default DressesList;
