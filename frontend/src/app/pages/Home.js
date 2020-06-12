import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import NavBar from '../components/NavBar';
import Search from '../components/Search';
import { H1, H3 } from '../components/Typography';

import background from '../../assets/background.jpg';

const useStyles = makeStyles({
  title: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  search: {
    marginTop: '4rem',
  },
  hero: {
    marginTop: '20vh',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div
      style={{
        background: `url(${background}) no-repeat`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <NavBar />

      <Container className={classes.hero}>
        <H1 className={classes.title}>
          Encontre profissionais que resolverão o seu problema
        </H1>
        <H3 className={classes.subtitle}>
          Peça orçamentos e contrates profissionais de qualidade com o Services
        </H3>
        <Search
          className={classes.search}
          label="Digite aqui o que vocês precisa"
        />
      </Container>
    </div>
  );
}

export default Home;
