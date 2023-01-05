import React from 'react';

import { PokemonProvider } from './app';
import { AppReactProps } from './types';

const AppProvider = ({ children }: AppReactProps) => {
  return <PokemonProvider>{children}</PokemonProvider>
};

export default AppProvider;
