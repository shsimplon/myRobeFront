import DressesListHome from 'app/pages/pageDresses/DressesListHome';
import React from 'react';
import ContactComponent from '../organisms/contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <DressesListHome />
      <ContactComponent />
    </div>
  );
};

export default Home;
