/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { notifySuccess, notifyError } from 'utils/toastify';

const ContactComponent = () => {
  const form: React.MutableRefObject<null> = useRef(null);

  const sendEmail = e => {
    e.preventDefault();
    var name = document.forms['form'].name.value;
    var message = document.forms['form'].message.value;
    if (!name.replace(/\s+/, '').length || !message.replace(/\s+/, '').length) {
      alert('veuillez remplir les champs manquants!');
      return false;
    } else {
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
            e.target.reset();
          },

          error => {
            notifyError(error.text);
          },
        );
    }
  };

  return (
    <div className="form-contact">
      <h3 className="h4-Contact">Besoin de plus d’informations ?</h3>

      <form name="form" className="container" ref={form} onSubmit={sendEmail}>
        <div className="form-control">
          <input type="text" name="name" required />
          <label htmlFor="name">Nom *</label>
        </div>
        <div className="form-control">
          <input type="email" name="email" required />
          <label htmlFor="email">Email *</label>
        </div>
        <div className="form-control">
          <input type="text" name="object" required />
          <label htmlFor="objec">Objet *</label>
        </div>
        <div className="form-control">
          <textarea name="message" required />
          <label>Message *</label>
        </div>
        <button className="button-contact" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
