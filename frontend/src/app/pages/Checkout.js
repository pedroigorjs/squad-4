import React from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import NavBar from '../components/NavBar';

const Container = styled.div`
  background-color: '#e6e6e6';
  position: relative;
  height: 100%;

  &::before {
    content: '';
    height: 20vh;
    width: 100%;
    background-color: #0d47a1;
    position: absolute;
    z-index: -1;
    margin-top: 4rem;
  }
`;

const Card = styled.div`
  margin: 3rem auto;
  width: 65%;
  height: 75vh;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.outline ? 'transparent' : '#0d47a1')};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: 1px solid #0d47a1;
  color: ${(props) => (props.outline ? '#0d47a1' : '#fff')};
  text-transform: uppercase;
  font-weight: 500;

  + button {
    margin-left: 1rem;
  }
`;

function Checkout() {
  return (
    <Container>
      <NavBar bgColor="#fff" />

      <Card>
        <div>
          <Button type="button" outline>
            Cancelar
          </Button>
          <Button type="button">Próximo</Button>
        </div>
      </Card>
    </Container>
  );
}

export default Checkout;
