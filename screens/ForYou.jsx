import React from 'react';
import {Text, View} from 'react-native';
import {AppHeader} from '../components';

const ForYou = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader title="Donations for you" />
      <Text>For you</Text>
    </View>
  );
};

export default ForYou;
