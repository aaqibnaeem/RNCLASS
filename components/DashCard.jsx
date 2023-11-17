import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import VectorIcon from './VectorIcon';

const DashCard = ({iconFamily, iconName, iconSize, details}) => {
  const theme = useTheme();
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: theme.colors.white,
      minHeight: 100,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={Styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'right'}}>
        {details.value}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <VectorIcon
          iconFamily={iconFamily}
          name={iconName}
          size={iconSize}
          color={theme.colors.blue}
        />
        <Text style={{color: theme.colors.blue}}>{details.label}</Text>
      </View>
    </View>
  );
};

export default DashCard;
