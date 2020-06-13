import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './app/pages/Home';

import Theme from './app/utils/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
