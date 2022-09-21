import React from 'react';
import {
  Footer,
  Contact108RueLemercier75017Paris,
  ActualitesActualitesTelevisionLivreD,
} from './footer.style';

const FooterComponent = () => {
  return (
    <>
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
            <img src="/twitter.png" alt="twitter" />
          </a>
          <a href="https://www.messenger.com/">
            {' '}
            <img src="/messenger.png" alt="messenger" />
          </a>
          <a href="https://fr-fr.facebook.com/">
            {' '}
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/?hl=fr">
            {' '}
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.whatsapp.com/?lang=fr">
            {' '}
            <img src="/whatsapp.png" alt="whatsapp" />
          </a>
        </div>
      </Footer>
      <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
        {' '}
        Paris.©2022 Dressline
      </div>
    </>
  );
};

export default FooterComponent;
