import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DrawerContent from '../DrawerConfig/DrawerContent';
import ProductsScreen from './ProductsScreen';
const Drawer = createDrawerNavigator();

export default MainScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="HomeScreen"
      defaultStatus="closed">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
