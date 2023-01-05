import React from 'react';

import { Container, Image } from './styles';

import logo from '../../assets/logo.png';

const Splash: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};

export default Splash;
