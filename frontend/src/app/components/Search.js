import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    marginLeft: '1rem',
    width: '150px',
  },
  searchBar: {
    backgroundColor: '#fff',
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
