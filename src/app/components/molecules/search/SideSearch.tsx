/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dressesStore } from 'types/dress';

const SideSearch = ({ value, setValue, handleChange }) => {
  const clearInput = e => {
    e.target.value = '';
  };
  return (
    <div className="sideSearch">
      {/* <img
        alt="image of women with dress"
        src="https://static.overlay-tech.com/assets/b4b9a8fe-fd9b-40d5-b701-5228498427f1.png"
      /> */}
      <div className="input-control">
        <label htmlFor="search">
          <img src="./search.png"></img>
        </label>

        <input
          type="text"
          placeholder="Rechercher"
          id="search"
          name="search"
          onChange={handleChange}
          value={value}
        />
        <img className="img-close" src="./close.png" onClick={clearInput}></img>
      </div>
    </div>
  );
};

export default SideSearch;
