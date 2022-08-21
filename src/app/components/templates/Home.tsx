import DressesListHome from 'app/pages/pageDresses/DressesListHome';
import React from 'react';
import NavigationComponent from '../molecules/navigation/Navigation';
import SideSearch from '../molecules/search/SideSearch';
import ContactComponent from '../organisms/contact/Contact';
import FooterComponent from '../organisms/footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <SideSearch />
      <DressesListHome />
      <ContactComponent />
    </div>
  );
};

export default Home;
