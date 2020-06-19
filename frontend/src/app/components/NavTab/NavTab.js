import React from 'react';

import { Container } from './styles';

function NavTab(props) {
  return (
    <Container type="button" {...props}>
      {props.label}
    </Container>
  );
}

export default NavTab;
