/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
import { editDress } from 'features/dresses.slice';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dressService } from 'services';
import { FaRegEdit } from 'react-icons/fa';

import Delete from './Delete';
import { Link, useLocation } from 'react-router-dom';
import { userStore } from 'types/user';

const CardDress = ({ dress }) => {
  const [edit, setEdit] = useState(false);
  const inputName = React.useRef<HTMLInputElement | null>(null);
  const inputSize = React.useRef<HTMLInputElement | null>(null);
  const inputPrice = React.useRef<HTMLInputElement | null>(null);
  const userState = useSelector((state: { user: userStore }) => state.user);

  const dispatch = useDispatch();

  const pathName = useLocation().pathname;

  const handleEdit = () => {
    setEdit(false);

    const data = {
      id: dress.id,
      name: inputName.current && inputName.current.value,
      description: dress.description,

      image: dress.image,

      size: inputSize.current && inputSize.current.value,

      price: inputPrice.current && inputPrice.current.value,
    };
    dressService.updateDress(data).then(() => {
      dispatch(editDress([data.name, data.price, data.size, dress.id]));
    });
  };

  let display;

  if (pathName === '/admin' && userState.user?.role === ('A' as any)) {
    display = (
      <div className="btn-container">
        <div className="edit-icon" onClick={() => setEdit(!edit)}>
          <FaRegEdit />
        </div>
        <Delete id={dress.id} dress={dress} />
      </div>
    );
  } else {
    display = null;
  }

  return (
    <div className="dress-card">
      <Link
        to={{
          pathname: `/robe/detail/${dress.id}`,
        }}
        key={dress.id}
      >
        <img src={dress.image} alt={'dress image ' + dress.name} />
      </Link>
      <div className="infos">
        <div className="title">
          {edit ? (
            <div>
              <span>Name : </span>
              <input defaultValue={dress.name} ref={inputName} autoFocus />
              <br />
              <span>Prix : </span>
              <input defaultValue={dress.price} ref={inputPrice} autoFocus />
              <br />
              <span>Taille : </span>
              <input defaultValue={dress.size} ref={inputSize} autoFocus />
              &nbsp;
              <button onClick={() => handleEdit()}>Valider</button>
            </div>
          ) : (
            <>
              <>
                <h4>
                  {inputName.current && inputName.current
                    ? inputName.current.value
                    : dress.name}
                </h4>{' '}
                &nbsp;
                <p>
                  Prix:{' '}
                  {inputPrice.current ? inputPrice.current.value : dress.price}
                </p>
                <p>
                  Taille:{' '}
                  {inputSize.current ? inputSize.current.value : dress.size}
                </p>
              </>
            </>
          )}
        </div>
        {display}
      </div>
    </div>
  );
};

export default CardDress;
