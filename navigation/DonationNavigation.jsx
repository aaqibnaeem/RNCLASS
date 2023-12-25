import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DonationReceive from '../screens/DonationReceive';
import DonationSend from '../screens/DonationSend';
import {View} from 'react-native';
import {AppHeader} from '../components';

const Tab = createMaterialTopTabNavigator();

const DonationNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader title="Donation" />
      <Tab.Navigator initialRouteName="DonationReceive">
        <Tab.Screen
          options={{title: 'Request Donation'}}
          name="DonationReceive"
          component={DonationReceive}
        />
        <Tab.Screen
          options={{title: 'Send Donation'}}
          name="DonationSend"
          component={DonationSend}
        />
      </Tab.Navigator>
    </View>
  );
};

export default DonationNavigation;
