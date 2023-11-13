import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import GraphBar from 'react-native-vector-icons/Foundation';

const HeaderCard = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    mainWrapper: {
      width: '100%',
      backgroundColor: theme.colors.primary,
      minHeight: 150,
      borderRadius: 25,
      paddingVertical: 14,
      paddingHorizontal: 12,
      elevation: 2,
    },
    month: {
      color: '#fff',
      fontSize: 20,
    },
    IEWrapper: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    IEText: {
      fontSize: 30,
      marginBottom: 4,
      fontWeight: 'bold',
      color: '#fff',
    },
    progressWrapper: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 8,
      height: 20,
      marginEnd: 10,
    },
    progress: {
      backgroundColor: '#fff',
      width: '70%',
      height: '100%',
      borderRadius: 7,
    },
  });
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.month}>Profit</Text>
      <View style={styles.IEWrapper}>
        <Text style={styles.IEText}>Rs. 11,20,000</Text>
        <View
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.progressWrapper}>
            <View style={styles.progress}></View>
          </View>
          <View>
            <GraphBar name="graph-bar" size={30} color="#fff" />
            <View>
              <Text style={{color: '#FFF'}}>70%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderCard;
