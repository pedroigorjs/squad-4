import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NavBar from '../components/NavBar';
import Search from '../components/Search';

import background from '../assets/background.jpg';

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

  const [search, setSearch] = useState('');

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <div
      style={{
        background: `url(${background}) no-repeat`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <NavBar>
        <Button
          variant="outlined"
          color="primary"
          className={classes.menuButton}
        >
          Entrar
        </Button>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </NavBar>

      <Container className={classes.hero}>
        <Typography variant="h1" className={classes.title}>
          Encontre profissionais que resolverão o seu problema
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>
          Peça orçamentos e contrate profissionais de qualidade com o Services
        </Typography>
        <Search
          className={classes.search}
          label="Digite aqui o que vocês precisa"
          searchValue={search}
          setSearchValue={setSearch}
          handleSearch={handleSearch}
        />
      </Container>
    </div>
  );
}

export default Home;
