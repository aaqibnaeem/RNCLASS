/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useTheme} from 'react-native-paper';
import {VectorIcon} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DonationNavigation from './DonationNavigation';
import ForYou from '../screens/ForYou';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const theme = useTheme();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '786446331979-dr9fetefgrrktpdpdegtgj9v6rsble9a.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceCodeForRefreshToken: true,
      accountName: '',
    });
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="donation"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Feed',
          tabBarIconStyle: {
            backgroundColor: 'blue',
          },
          tabBarIcon: ({focused}) => {
            return (
              <VectorIcon
                iconFamily={'FA'}
                name={'newspaper-o'}
                size={25}
                color={focused ? theme.colors.primary : theme.colors.secondary}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="donation"
        component={DonationNavigation}
        options={{
          headerShown: false,
          title: 'Donation',
          tabBarIcon: ({focused}) => {
            return (
              <VectorIcon
                iconFamily={'AA'}
                name={'pluscircleo'}
                size={25}
                color={focused ? theme.colors.primary : theme.colors.secondary}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="forYou"
        component={ForYou}
        options={{
          headerShown: false,
          title: 'Donation',
          tabBarIcon: ({focused}) => {
            return (
              <VectorIcon
                iconFamily={'AA'}
                name={'staro'}
                size={25}
                color={focused ? theme.colors.primary : theme.colors.secondary}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
