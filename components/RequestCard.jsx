import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const RequestCard = ({type, description}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    mainCardView: {
      minHeight: 120,
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: 15,
      shadowColor: theme.colors.secondary,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: theme.colors.primary,
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.mainCardView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            {type}
          </Text>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
              width: '85%',
            }}>
            <Text
              style={{
                color: theme.colors.secondary,
                fontSize: 12,
              }}>
              {description}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 25,
          backgroundColor: theme.colors.primary,
          borderWidth: 0,
          width: 25,
          marginLeft: -26,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
        }}>
        {/* <Text style={{color: Colors.white}}>{item.unread_messages_count}</Text> */}
      </View>
    </View>
  );
};

export default RequestCard;
