import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0D47A1',
    },
  },
  typography: {
    h1: {
      fontSize: '3.375rem',
      fontWeight: '300',
      color: (props) => props.color,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: '400',
      color: (props) => props.color,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '400',
      color: (props) => props.color,
    },
  },
});

export default Theme;
