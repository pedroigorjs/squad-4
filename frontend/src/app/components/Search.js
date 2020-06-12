import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    marginLeft: '1rem',
    width: '150px',
  },
});

export default function Search({ searchValue, setSearchValue, handleSearch }) {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '.5rem',
        borderRadius: '4px',
        display: 'flex',
      }}
    >
      <InputBase
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
