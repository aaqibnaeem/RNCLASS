import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 1800);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
      }}>
      <Image
        source={require('../assets/images/A.png')}
        style={{width: 100, height: 100}}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
