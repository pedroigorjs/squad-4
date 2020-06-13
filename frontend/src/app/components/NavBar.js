import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/logo.svg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: 'rgba(56, 56, 56, 0.9)',
  },
});

function NavBar({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <Grid container justify="center">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              xs={11}
            >
              <img src={logo} alt="Joble" />
              {children}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
