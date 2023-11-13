import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReportsCard = props => {
  return (
    <>
      <View style={styles.mainWrapper}>
        <View style={[styles.iconWrapper, {backgroundColor: props.bgCol}]}>
          <View>{props.icon}</View>
        </View>
        <Text style={[styles.cardHeading, {flex: 1}]}>{props.heading}</Text>
        <Text style={[styles.cardAmount, {color: '#007ACC'}]}>
          {props.amount}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 18,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardAmount: {
    fontSize: 16,
  },
});

export default ReportsCard;
