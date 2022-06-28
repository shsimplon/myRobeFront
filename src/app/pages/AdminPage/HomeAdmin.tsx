import DressesList from 'app/pages/pageDresses/DressesList';
import React from 'react';
import NavigationComponent from '../../components/molecules/navigation/Navigation';

const HomeAdmin = () => {
  return (
    <div>
      <NavigationComponent />
      <DressesList />
    </div>
  );
};

export default HomeAdmin;
