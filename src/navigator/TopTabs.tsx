import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Home} />
    </Tab.Navigator>
  );
}
