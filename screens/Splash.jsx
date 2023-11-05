import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const Splash = ({navigation}) => {
  const theme = useTheme();
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
        backgroundColor: theme.colors.primary,
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
