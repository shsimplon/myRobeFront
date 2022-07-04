import DressesListHome from 'app/pages/pageDresses/DressesListHome';
import React from 'react';
import NavigationComponent from '../molecules/navigation/Navigation';
import SideSearch from '../molecules/search/SideSearch';

const Home = () => {
  return (
    <div>
      <NavigationComponent />
      <SideSearch />
      <DressesListHome />
    </div>
  );
};

export default Home;
