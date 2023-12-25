import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {PaperProvider, DefaultTheme} from 'react-native-paper';
import SignupScreen from './screens/SignupScreen';
import Splash from './screens/Splash';
import LoginScreen from './screens/LoginScreen';
import DrawerNavigation from './navigation/DrawerNavigation';

const App = () => {
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#23BE84',
      primaryLight: '#4adea8',
      background: '#F2F2F2',
      secondary: '#1E3E59',
      surface: '#FFFFFF',
      text: '#333333',
      disabled: '#BFBFBF',
      white: '#FFFFFF',
      borderColor: '#E3E3E3',
    },
    roundness: 8,
  };
  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MainScreen"
              component={DrawerNavigation}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
