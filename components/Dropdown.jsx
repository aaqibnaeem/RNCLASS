import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const Dropdown = ({
  items,
  onSelect,
  buttonTextAfterSelection,
  rowTextForSelection,
  searchEnabled,
  label = 'label',
}) => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{fontWeight: 600, fontSize: 16, marginBottom: 5}}>
        {label}
      </Text>
      <SelectDropdown
        buttonStyle={{
          backgroundColor: theme.colors.white,
          borderRadius: theme.roundness,
          elevation: 1,
          width: '100%',
        }}
        selectedRowStyle={{
          backgroundColor: theme.colors.primary,
        }}
        selectedRowTextStyle={{
          color: theme.colors.surface,
        }}
        search={searchEnabled}
        dropdownStyle={{borderRadius: theme.roundness}}
        data={items}
        onSelect={onSelect}
        buttonTextAfterSelection={buttonTextAfterSelection}
        rowTextForSelection={rowTextForSelection}
        renderCustomizedRowChild={() => {
          return (
            <View>
              <Text>Hello world</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dropdown;
