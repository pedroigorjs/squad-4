import React from 'react';

import Menu from '../components/Menu';
import Search from '../components/Search';

import background from '../../assets/background.jpg';

function Home() {
  return (
    <div
      style={{
        background: `url(${background}) no-repeat`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <Menu />

      <div
        style={{
          width: '42%',
          textAlign: 'center',
          margin: '8rem auto',
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '3.375rem',
            fontWeight: '300',
          }}
        >
          Encontre profissionais que resolverão o seu problema
        </h1>
        <h2
          style={{
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: '400',
          }}
        >
          Peça orçamentos e contrate profissionais de qualidade com o Services
        </h2>

        <Search />
      </div>
    </div>
  );
}

export default Home;
