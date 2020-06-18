import React from 'react';

import Card from '@material-ui/core/Card';
import {
  CardActions,
  CardContent,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';

import PorfileImage from '../assets/profile-card.jpg';

const useStyles = makeStyles({
  image: {
    width: '100%',
  },
  card: {
    maxWidth: '450px',
    textAlign: 'center',
  },
});

function ProfileCard(props) {
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3">Vitória Regina</Typography>
        <img
          className={classes.image}
          src={PorfileImage}
          alt="Vitória Regina"
        />
      </CardContent>
      <CardActions>
        <Button variant="primary">Ver perfil do profissional</Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
