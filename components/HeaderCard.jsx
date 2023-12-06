import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import GraphBar from 'react-native-vector-icons/Foundation';
import DashCard from './DashCard';

const HeaderCard = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    mainWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      backgroundColor: theme.colors.primary,
      minHeight: 150,
      borderRadius: 25,
      paddingVertical: 14,
      paddingHorizontal: 12,
      elevation: 2,
    },
  });
  return (
    <View style={styles.mainWrapper}>
      <DashCard
        iconFamily="AA"
        iconSize={25}
        iconName="arrowdown"
        bgColor={theme.colors.primary}
        details={{value: 1000, label: 'Receiveable'}}
        color="white"
      />
      <DashCard
        iconFamily="AA"
        iconSize={25}
        iconName="arrowup"
        bgColor={theme.colors.primary}
        details={{value: 1000, label: 'Payable'}}
        color="white"
      />
      <DashCard
        iconFamily="FT"
        iconSize={25}
        iconName="box"
        bgColor={theme.colors.primary}
        details={{value: 1000, label: 'Stock'}}
        color="white"
      />
    </View>
  );
};

export default HeaderCard;
