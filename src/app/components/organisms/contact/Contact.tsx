import React from 'react';
import {
  Contact,
  Frame40,
  Rectangle14,
  Frame41,
  Input,
  Line2,
  InputTwo,
  Line3,
  Textarea,
  Button,
} from './contact.style';

const ContactComponent = () => {
  return (
    <Contact>
      <Frame40>
        <Rectangle14 />
      </Frame40>
      <Frame41>
        <Input>Nom</Input>
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/ca0477d2-59b5-490b-a5f5-88da95a124fe.png"
        />{' '}
        <InputTwo>Email</InputTwo>
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/ca0477d2-59b5-490b-a5f5-88da95a124fe.png"
        />
        <InputTwo>Objet</InputTwo>
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/ca0477d2-59b5-490b-a5f5-88da95a124fe.png"
        />
        <Textarea>Message</Textarea>
        <Line3
          alt=""
          src="https://static.overlay-tech.com/assets/4cd5b6e0-a328-4d83-ba80-d9622c1b607a.png"
        />
        <Button>Envoyer</Button>
      </Frame41>
    </Contact>
  );
};

export default ContactComponent;
