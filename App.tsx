import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import FlatListPractice from './screens/FlatListPractice';
import LoginPractice from './screens/LoginPractice';
import SwiperPractice from './screens/SwiperPractice';
import {PaperProvider} from 'react-native-paper';
import LoginScreen from './screens/LoginScreen';
const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginPractice}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FlatList"
              component={FlatListPractice}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Swiper"
              component={SwiperPractice}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
