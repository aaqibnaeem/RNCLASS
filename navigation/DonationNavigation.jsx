import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DonationReceive from '../screens/DonationReceive';
import DonationSend from '../screens/DonationSend';
import {Animated, Dimensions, TouchableOpacity, View} from 'react-native';
import {AppHeader} from '../components';
import {useTheme} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();
const {width} = Dimensions.get('screen');
const tabWidth = width * 0.5;

const MyTabBar = ({state, descriptors, navigation, position}) => {
  const theme = useTheme();
  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // const inputRange = state.routes.map((_, i) => i);
        // const opacity = position.interpolate({
        //   inputRange,
        //   outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        // });

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              height: 50,
              backgroundColor: isFocused
                ? theme.colors.primary
                : theme.colors.secondary,
              borderRadius: theme.roundness,
              elevation: 10,
            }}>
            <Animated.Text
              style={{
                padding: 10,
                borderRadius: theme.roundness,
                minWidth: 100,
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const DonationNavigation = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <AppHeader title="Donation" />
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        initialRouteName="DonationReceive">
        <Tab.Screen
          options={{title: 'Request'}}
          name="DonationReceive"
          component={DonationReceive}
        />
        <Tab.Screen
          options={{title: 'Send'}}
          name="DonationSend"
          component={DonationSend}
        />
      </Tab.Navigator>
    </View>
  );
};

export default DonationNavigation;
