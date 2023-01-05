import React from 'react';

import { useApp } from '../hooks/app';
import Splash from '../pages/Splash';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { loading } = useApp();

  if (loading) {
    return <Splash />;
  }
  return <AppRoutes />;
};

export default Routes;
