import React from 'react';

import NavBar from '../components/NavBar';
import Filters from '../components/Filters';
import ProfileCard from '../components/ProfileCard';

function Results() {
  return (
    <>
      <NavBar bgColor="#fff" />
      <Filters />
      <ProfileCard />
    </>
  );
}

export default Results;
