import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: 'rgba(56, 56, 56, 0.9)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar({ children }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.menu}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Services
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
