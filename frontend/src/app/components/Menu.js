import React from 'react';
import { Navbar, Icon, Button } from 'react-materialize';

function Menu() {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="#home">
          Services
        </a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      style={{
        background: 'rgba(56, 56, 56, 0.8)',
      }}
    >
      <Button
        node="button"
        style={{
          marginRight: '20px',
          border: '1px solid #0D47A1',
          background: 'transparent',
          fontWeight: '500',
        }}
        waves="light"
      >
        Entrar
      </Button>
      <Button
        node="button"
        style={{
          marginRight: '20px',
          border: '1px solid #0D47A1',
          background: '#0D47A1',
          fontWeight: '500',
        }}
        waves="light"
      >
        Cadastrar
      </Button>
    </Navbar>
  );
}

export default Menu;
