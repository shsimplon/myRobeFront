/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import Home from 'app/components/templates/Home';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = e => {};
  return (
    <div className="header">
      <div className=" header-left">
        <h2 className="h2">
          {' '}
          Nos stylistes s'en sont largement inspirée et l'ont choisie pour vous
          satisfaire
        </h2>
        <a className="fleche-dressList" href="#dressList">
          <img
            className="img-fleche"
            src="./fleche-bas.png"
            alt="dress image"
          />
        </a>
      </div>
      <div className="cube">
        <img
          src="https://res.cloudinary.com/djmh8vlgx/image/upload/v1656431615/cm8ag4kymawydm0ssjvu.jpg"
          className="side"
          id="front"
          alt="dress image"
        ></img>
        <img
          src="https://res.cloudinary.com/djmh8vlgx/image/upload/v1658171661/xcadg8n5c5ijcgu4ului.webp"
          className="side"
          id="bottom"
          alt="dress image"
        ></img>
        <img
          src="https://res.cloudinary.com/djmh8vlgx/image/upload/v1656436394/tv7twajrmjwyeo5bpdwt.webp"
          className="side"
          id="top"
          alt="dress image"
        ></img>
        <img
          src="https://res.cloudinary.com/djmh8vlgx/image/upload/v1655646800/ls79nb3druphbilrwiys.jpg"
          className="side"
          id="left"
          alt="dress image"
        ></img>
        <img
          src="https://res.cloudinary.com/djmh8vlgx/image/upload/v1655666511/n3y8ylk6maoz4yz5dzon.webp"
          className="side"
          id="right"
          alt="dress image"
        ></img>
        <img
          src="https://res.cloudinary.com/djmh8vlgx/image/upload/v1656430934/bfrebj6xkd69xgqzs39f.jpg"
          className="side"
          id="back"
          alt="dress image"
        ></img>
      </div>
    </div>
  );
};

export default Header;
