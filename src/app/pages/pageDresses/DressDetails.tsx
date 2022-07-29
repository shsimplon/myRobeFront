import React, { useState } from 'react';

const DressDetails = ({ dress }) => {
  return (
    <div className="dress-card">
      <p>hhhhhi detail</p>
      <img src={dress.image} alt={'photo de ' + dress.name} />
      <div className="infos">
        <div className="title">
          <p>
            {dress.name}&nbsp; taille: {dress.size}
          </p>
          <p>{dress.price}</p>
          <p>{dress.description}</p>
        </div>
      </div>
    </div>
  );
};
export default DressDetails;
