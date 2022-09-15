import DressesListHome from 'app/pages/pageDresses/DressesListHome';
import React from 'react';
import Header from '../molecules/header/Header';
import ContactComponent from '../organisms/contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <DressesListHome />
      <ContactComponent />
    </div>
  );
};

export default Home;
