import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Navigator} from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';
import { ButtonTabs } from './src/navigator/BottomTabs';
import { TopTabs } from './src/navigator/TopTabs';

const App = () => {
  return (
    <NavigationContainer>
      <TopTabs />
    </NavigationContainer>
  );
};

export default App;
