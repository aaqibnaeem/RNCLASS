/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useTheme} from 'react-native-paper';
import {VectorIcon} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DonationNavigation from './DonationNavigation';
import ForYou from '../screens/ForYou';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import VideoPost from '../screens/VideoPosts';
import About from '../screens/About';

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

  const styles = StyleSheet.create({
    customIcon: {
      position: 'absolute',
      top: -20,
      backgroundColor: theme.colors.surface,
      borderRadius: 100,
      padding: 2,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      elevation: 2,
    },
  });
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        initialRouteName="donation"
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarStyle: {
            marginHorizontal: 10,
            marginBottom: 10,
            elevation: 1,
            height: 60,
            paddingBottom: 6,
            borderRadius: theme.roundness,
          },
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
                  iconFamily={'IOI'}
                  name={'newspaper-outline'}
                  size={22}
                  color={
                    focused ? theme.colors.primary : theme.colors.secondary
                  }
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="VideoPosts"
          component={VideoPost}
          options={{
            headerShown: false,
            title: 'Video Posts',
            tabBarIconStyle: {
              backgroundColor: 'blue',
            },
            tabBarIcon: ({focused}) => {
              return (
                <VectorIcon
                  iconFamily={'AA'}
                  name={'videocamera'}
                  size={22}
                  color={
                    focused ? theme.colors.primary : theme.colors.secondary
                  }
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
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return (
                <View tran style={styles.customIcon}>
                  <VectorIcon
                    iconFamily={'AA'}
                    name={'pluscircleo'}
                    size={50}
                    color={
                      focused ? theme.colors.primary : theme.colors.secondary
                    }
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="forYou"
          component={ForYou}
          options={{
            headerShown: false,
            title: 'For you',
            tabBarIcon: ({focused}) => {
              return (
                <VectorIcon
                  iconFamily={'AA'}
                  name={'staro'}
                  size={23}
                  color={
                    focused ? theme.colors.primary : theme.colors.secondary
                  }
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
            title: 'About',
            tabBarIcon: ({focused}) => {
              return (
                <VectorIcon
                  iconFamily={'AA'}
                  name={'infocirlceo'}
                  size={22}
                  color={
                    focused ? theme.colors.primary : theme.colors.secondary
                  }
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default TabNavigation;
