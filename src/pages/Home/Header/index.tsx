import React, { useState } from 'react';

import { Keyboard } from 'react-native';
import { Container, Image, SearchContainer, Input, Icon } from './styles';
import logo from '../../../assets/logo.png';

import { useApp } from '../../../context/app';

const Header: React.FC = () => {
  const [showClose, setShowClose] = useState(false);
  const { textFilter, setTextFilter } = useApp();

  const clearInput = () => {
    setTextFilter('');
    setShowClose(false);
    Keyboard.dismiss;
  };

  return (
    <Container>
      <Image source={logo} />
      <SearchContainer>
        <Icon name="search" size={20} />

        <Input
          placeholder="Buscar Pokemon"
          placeholderTextColor="#666360"
          autoCapitalize="none"
          autoCorrect={false}
          value={textFilter}
          onChangeText={setTextFilter}
        />

        {showClose && <Icon name="x" size={20} onPress={clearInput} />}
      </SearchContainer>
    </Container>
  );
};

export default Header;
