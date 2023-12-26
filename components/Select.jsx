import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import VectorIcon from './VectorIcon';
import {useTheme} from 'react-native-paper';

const Select = ({
  placeholder = 'Donation Type',
  onAction,
  value,
  data,
  searchEnabled,
}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: theme.roundness,
      paddingHorizontal: 8,
      backgroundColor: 'white',
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
      paddingLeft: 6,
      paddingBottom: 2,
    },
    selectedTextStyle: {
      fontSize: 16,
      paddingLeft: 6,
      paddingBottom: 2,
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  return (
    <View>
      <Dropdown
        search={searchEnabled}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onChange={onAction}
        renderLeftIcon={() => (
          <VectorIcon
            iconFamily="AA"
            color={theme.colors.primary}
            name="search1"
            size={15}
          />
        )}
      />
    </View>
  );
};

export default Select;
