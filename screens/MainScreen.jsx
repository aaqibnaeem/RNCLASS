import * as React from 'react';
<<<<<<< HEAD
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DrawerContent from '../DrawerConfig/DrawerContent';
import ProductsScreen from './ProductsScreen';
=======
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DrawerContent from '../DrawerConfig/DrawerContent';
>>>>>>> origin/master
const Drawer = createDrawerNavigator();

export default MainScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="HomeScreen"
      defaultStatus="open">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
<<<<<<< HEAD
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ headerShown: false }}
=======
        options={{headerShown: false}}
>>>>>>> origin/master
      />
    </Drawer.Navigator>
  );
};
