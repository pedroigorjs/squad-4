import React from 'react';

import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './routes';

import theme from './app/utils/theme';
import history from './app/utils/history';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <CssBaseline />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
