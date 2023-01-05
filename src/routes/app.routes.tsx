import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Detail" component={Detail} />
    </App.Navigator>
  );
};

export default AppRoutes;
