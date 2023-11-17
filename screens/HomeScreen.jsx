import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {View, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import AppHeader from '../components/Header';
import HeaderCard from '../components/HeaderCard';
import DailyReports from '../components/DailyReports';
import {VectorIcon} from '../components';
import DashCard from '../components/DashCard';

const HomeSceen = ({navigation}) => {
  const theme = useTheme();
  const Styles = StyleSheet.create({
    header: {
      height: 60,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });

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
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth()
        .signOut()
        .then(() => navigation.replace('LoginScreen'))
        .catch(err => {
          console.log(err);
          Alert.alert('Something wrong happend during signing out');
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <AppHeader
        title={'Dashboard'}
        rightElement={
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <VectorIcon
              iconFamily={'AA'}
              name={'menu-fold'}
              size={25}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        }
      />
      <View style={{paddingHorizontal: 20}}>
        <HeaderCard />
        <DailyReports />
        <View>
          <DashCard
            iconFamily={'AA'}
            iconName={'user'}
            iconSize={25}
            details={{label: 'Total Users', value: 1000}}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeSceen;
