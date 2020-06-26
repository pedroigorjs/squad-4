import React from 'react';
import styled from 'styled-components';

import Help from '@material-ui/icons/Help';
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
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  h2 {
    font-size: 3.375rem;
    font-weight: 400;
  }
`;

const Info = styled.div`
  position: relative;

  h3 {
    font-weight: 400;
    font-size: 2.25rem;
    margin-top: 1.5rem;

    ::before {
      content: '*obrigatório';
      color: red;
      font-size: 1rem;
      position: absolute;
      top: 5px;
    }
  }

  p {
    margin-top: 1.5rem;
    font-weight: 500;
  }

  input {
    margin-top: 1.5rem;
    border: none;
    border-bottom: 2px solid #707070;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    width: 40%;

    ::placeholder {
      color: #707070;
    }
  }

  div {
    display: flex;
    justify-content: center;

    svg {
      margin-top: 2.5rem;
      margin-left: 0.5rem;
    }
  }
`;

const Wizard = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  width: 30%;
  border: 2.5px solid #0d4a71;

  ::before {
    content: ' ';
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #0d4a71;
    position: absolute;
    top: -20px;
    left: -1rem;
  }

  ::after {
    content: ' ';
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #707070;
    position: absolute;
    top: -20px;
    right: -1rem;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.outline ? 'transparent' : '#0d47a1')};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: 1px solid #0d47a1;
  color: ${(props) => (props.outline ? '#0d47a1' : '#fff')};
  text-transform: uppercase;
  font-weight: 500;
  margin: 1rem 0;
  cursor: pointer;

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
          <h2>Pedir por serviço</h2>

          <Wizard />

          <Info>
            <div>
              <h3>Informações sobre o pedido</h3>
              <Help />
            </div>
            <p>Insira as Informações do projeto</p>
            <input type="text" placeholder="Insira uma descrição do pedido" />
          </Info>
        </div>

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
