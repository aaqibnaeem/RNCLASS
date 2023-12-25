import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../DrawerConfig/DrawerContent';
import TabNavigation from './TabNavigation';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="HomeScreen"
      defaultStatus="closed">
      <Drawer.Screen
        name="HomeScreen"
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
