import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {PaperProvider, DefaultTheme} from 'react-native-paper';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import Splash from './screens/Splash';

const App = () => {
  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0460D9',
      primaryLight: '#0476D9',
      accent: '#0476D9',
      background: '#F2F2F2',
      secondary: '#1E3E59',
      surface: '#FFFFFF',
      text: '#333333',
      disabled: '#BFBFBF',
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
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
