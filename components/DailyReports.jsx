import React from 'react';
import {View, StyleSheet} from 'react-native';
import VectorIcon from './VectorIcon';
import ReportsCard from './ReportsCard';
import {Text, useTheme} from 'react-native-paper';

const DailyReports = () => {
  const theme = useTheme();
  return (
    <View style={styles.reportsWrapper}>
      <Text
        style={{
          paddingLeft: 20,
          fontWeight: 'bold',
          color: theme.colors.text,
        }}>
        Daily report
      </Text>
      <ReportsCard
        icon={
          <VectorIcon iconFamily="FT" name="box" size={24} color={'#fff'} />
        }
        heading="Stock In"
        bgCol="#2BC999"
        amount={'1,20,000'}
      />
      <ReportsCard
        icon={
          <VectorIcon
            iconFamily="ET"
            name="bar-graph"
            size={20}
            color={'#fff'}
          />
        }
        heading="Stock Out"
        amount={'4,80,850'}
        bgCol="#FBB41A"
      />
      <ReportsCard
        icon={
          <VectorIcon iconFamily="AA" name="wallet" size={20} color={'#fff'} />
        }
        heading="Expense"
        amount={'80,000'}
        bgCol="#FF5E5B"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  heading: {
    color: '#000',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cta: {
    color: '#007ACC',
    fontWeight: 'bold',
  },
  reportsWrapper: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 8,
    elevation: 2,
    shadowColor: 'grey',
    minHeight: 200,
    display: 'flex',
    justifyContent: 'space-around',
  },
});

export default DailyReports;
