/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDresses } from 'features/dresses.slice';
import { dressService } from 'services';
import { dressesStore } from 'types/dress';
import CardDress from './CardDress';
import SideSearch from 'app/components/molecules/search/SideSearch';
const DressesListHome = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const dressState = useSelector(
    (state: { dress: dressesStore }) => state.dress.dress,
  );

  useEffect(() => {
    dressService.getAll().then(res => dispatch(getDresses(res.data)));
  }, []);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="nav-heading">
        <SideSearch
          value={value}
          setValue={setValue}
          handleChange={handleChange}
        />
      </div>
      <br />
      <h3>Liste de robes</h3>

      <div className="cards-container">
        {dressState &&
          dressState
            .filter(val => {
              //@ts-ignore
              return val.name.toLowerCase().includes(value.toLowerCase());
            })
            .map((dress, key) => <CardDress key={key} dress={dress} />)}
      </div>
    </>
  );
};

export default DressesListHome;
