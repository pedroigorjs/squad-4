import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    width: '150px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  },
  input: {
    background: '#fff',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    padding: '0 1rem',
    border: 'none',
  },
  searchBar: {
    padding: '.5rem',
    borderRadius: '4px',
    display: 'flex',
    maxWidth: (props) => `${props.maxWidth}px`,
    minWidth: (props) => `${props.minWidth}px`,
  },
});

export default function Search(props) {
  const classes = useStyles(props);
  const { searchValue, setSearchValue, handleSearch } = props;

  return (
    <div className={classes.searchBar}>
      <InputBase
        className={classes.input}
        fullWidth
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Insira o tipo de profissional que você deseja..."
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Buscar
      </Button>
    </div>
  );
}
