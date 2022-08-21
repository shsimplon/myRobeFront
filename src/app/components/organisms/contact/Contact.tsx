import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Contact, Rectangle14, Form, Line3 } from './contact.style';
import { notifySuccess } from 'utils/toastify';

const ContactComponent = () => {
  const form = useRef(null);
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9cpk7ve',
        'template_7qov02b',
        form.current as any,
        'user_YSNgmLruXXfdeJhpbWXuq',
      )
      .then(
        result => {
          notifySuccess('Votre message a été envoyé avec succès');
          console.log('message sent');
          e.target.reset();
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <Contact>
      <Rectangle14 />
      <Form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nom</label>
        <input className="inputName" type="text" name="name" />
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/ca0477d2-59b5-490b-a5f5-88da95a124fe.png"
        />{' '}
        <label htmlFor="email">Email</label>
        <input className="inputEmail" type="email" name="email" />
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/ca0477d2-59b5-490b-a5f5-88da95a124fe.png"
        />
        <label htmlFor="objec">Objet</label>
        <input className="inputEmail" type="text" name="object" />
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/ca0477d2-59b5-490b-a5f5-88da95a124fe.png"
        />
        <label>Message</label>
        <textarea name="message" />
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/4cd5b6e0-a328-4d83-ba80-d9622c1b607a.png"
        />
        <button className="inputSubmit" type="submit">
          Envoyer
        </button>
      </Form>
    </Contact>
  );
};

export default ContactComponent;
