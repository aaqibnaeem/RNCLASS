import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const AppHeader = ({title, rightElement}) => {
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
    title: {fontSize: 18, fontWeight: 'bold', color: theme.colors.secondary},
  });
  return (
    <View style={Styles.header}>
      <Text style={Styles.title}>{title}</Text>
      <View>{rightElement}</View>
    </View>
  );
};

export default AppHeader;
