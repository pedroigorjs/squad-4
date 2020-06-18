import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

import StarIcon from '@material-ui/icons/Star';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: '250px',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  input: {
    width: '100%',
  },
  icon: {
    color: '#ffca28',
  },
}));

function Results(props) {
  const classes = useStyles(props);
  const [order, setOrder] = useState('');

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeSelect = (event) => {
    setOrder(event.target.value);

    console.log(order);
  };

  const handleRating = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent style={{ borderBottom: '1px solid #000' }}>
          <Typography variant="h3">
            Ordenar por
            <Button>Limpar</Button>
          </Typography>
        </CardContent>
        <CardActions style={{ padding: '1rem' }}>
          <FormControl className={classes.input}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order}
              onChange={handleChangeSelect}
            >
              <MenuItem value="price">Preço</MenuItem>
              <MenuItem value="name">Nome</MenuItem>
              <MenuItem value="rating">Nota</MenuItem>
            </Select>
          </FormControl>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardContent style={{ borderBottom: '1px solid #000' }}>
          <Typography variant="h3">Filtros</Typography>
        </CardContent>
        <CardActions style={{ padding: '1rem' }}>
          <Grid direction="column">
            <FormControl className={classes.input}>
              <Typography variant="p">Cidade</Typography>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChangeCheckbox} />
                }
                label="Santos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChangeCheckbox} />
                }
                label="Santos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChangeCheckbox} />
                }
                label="Santos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChangeCheckbox} />
                }
                label="Santos"
              />
            </FormControl>

            <FormControl className={classes.input}>
              <Typography variant="p">Preços</Typography>
              <InputBase placeholder="Preço máximo" />
            </FormControl>

            <FormControl className={classes.input}>
              <Typography variant="p">Avaliação</Typography>
              <Grid direction="row">
                <StarIcon
                  className={classes.icon}
                  value="1"
                  onClick={(event) => handleRating(event)}
                />
                <StarIcon
                  className={classes.icon}
                  value="1"
                  onClick={(event) => handleRating(event)}
                />
                <StarIcon
                  className={classes.icon}
                  value="1"
                  onClick={(event) => handleRating(event)}
                />
                <StarIcon
                  className={classes.icon}
                  value="1"
                  onClick={(event) => handleRating(event)}
                />
                <StarIcon
                  className={classes.icon}
                  value="1"
                  onClick={(event) => handleRating(event)}
                />
              </Grid>
            </FormControl>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default Results;
