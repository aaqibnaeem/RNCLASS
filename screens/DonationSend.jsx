import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const DonationSend = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
  });
  return (
    <View style={styles.wrapper}>
      <Text>I am Aqib</Text>
    </View>
  );
};

export default DonationSend;
