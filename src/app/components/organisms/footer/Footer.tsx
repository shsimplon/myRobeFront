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
      <Twitter alt="" src="../vector-1.png" />
      <Twitter alt="" src="../vector-2.png" />
      <Twitter alt="" src="../vector-3.png" />
      <Twitter alt="" src="../vector-4.png" />
      <Twitter alt="" src="../vector.png" />
    </Footer>
  );
};

export default FooterComponent;
