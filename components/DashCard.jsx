import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import VectorIcon from './VectorIcon';

const DashCard = ({
  iconFamily,
  iconName,
  iconSize,
  details,
  bgColor,
  color,
  onAction,
}) => {
  const theme = useTheme();
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: bgColor || 'white',
      minHeight: 100,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 1,
      marginTop: 10,
    },
  });
  return (
    <View style={Styles.container} onTouchStart={onAction && onAction}>
      <VectorIcon
        iconFamily={iconFamily}
        name={iconName}
        size={iconSize}
        color={color}
      />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
        }}>
        <Text style={{color: color}}>{details?.label || ''}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'right',
            color: color,
          }}>
          {details?.value || 0}
        </Text>
      </View>
    </View>
  );
};

export default DashCard;
