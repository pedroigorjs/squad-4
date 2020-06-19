import React from 'react';

import NavBar from '../components/NavBar';
import Filters from '../components/Filters';
import ProfileCard from '../components/ProfileCard';

import { NavTab } from '../components/NavTab';

function Results() {
  return (
    <>
      <NavBar bgColor="#fff">
        <NavTab
          label="Pesquisar profissionais"
          color="#0D47A1"
          borderColor="#0D47A1"
          padding="2rem"
          isActive
        />
        <NavTab
          label="Serviços comprados"
          color="#0D47A1"
          borderColor="#0D47A1"
          padding="2rem"
        />
      </NavBar>
      <Filters />
      <ProfileCard />
    </>
  );
}

export default Results;
