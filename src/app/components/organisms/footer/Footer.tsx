import React from 'react';
import {
  Footer,
  Twitter,
  Contact108RueLemercier75017Paris,
  ActualitesActualitesTelevisionLivreD,
} from './footer.style';

const FooterComponent = () => {
  return (
    <Footer>
      <div className="contact">
        <Contact108RueLemercier75017Paris>
          CONTACT
          <br />
          Paris
          <br />
          (&#43;33) 01 00 00 00 00
          <br />
          info&#64;gmail.com
        </Contact108RueLemercier75017Paris>
        <ActualitesActualitesTelevisionLivreD>
          ACTUALITÉS
          <br />
          Actualités
          <br />
          Télévision
          <br />
          Livre d’or
        </ActualitesActualitesTelevisionLivreD>
      </div>
      <div className="socialNetwork">
        <a href="https://twitter.com/?lang=fr">
          {' '}
          <Twitter alt="twitter" src="../vector-1.png" />
        </a>
        <a href="https://www.messenger.com/">
          {' '}
          <Twitter alt="messenger" src="../vector-2.png" />
        </a>
        <a href="https://fr-fr.facebook.com/">
          {' '}
          <Twitter alt="facebook/" src="../vector-3.png" />
        </a>
        <a href="https://www.instagram.com/?hl=fr">
          {' '}
          <Twitter alt="instagram" src="../vector-4.png" />
        </a>
        <a href="https://www.whatsapp.com/?lang=fr">
          {' '}
          <Twitter alt="whatsapp" src="../vector.png" />
        </a>
      </div>
    </Footer>
  );
};

export default FooterComponent;
