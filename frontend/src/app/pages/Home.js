import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NavBar from '../components/NavBar';
import Search from '../components/Search';

import background from '../assets/background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginTop: '25vh',
    marginBottom: '1rem',
    display: 'inline-block',
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '1rem',
    display: 'inline-block',
  },
  search: {
    marginTop: '4rem',
    width: '300px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
  },
}));

function Home() {
  const classes = useStyles();

  const [search, setSearch] = useState('');

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          background: `url(${background}) no-repeat`,
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <NavBar>
          <Grid direction="row">
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
          </Grid>
        </NavBar>

        <Grid container justify="center">
          <Grid container xs={9} direction="column" alignItems="center">
            <Typography variant="h1" className={classes.title}>
              Encontre profissionais que resolverão o seu problema
            </Typography>
            <Typography variant="h3" className={classes.subtitle}>
              Peça orçamentos e contrate profissionais de qualidade com o
              Services
            </Typography>
            <Search
              className={classes.search}
              maxWidth={700}
              minWidth={500}
              label="Digite aqui o que vocês precisa"
              searchValue={search}
              setSearchValue={setSearch}
              handleSearch={handleSearch}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
