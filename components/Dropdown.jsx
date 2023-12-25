import React from 'react';
import {useTheme} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const Dropdown = ({
  items,
  onSelect,
  buttonTextAfterSelection,
  rowTextForSelection,
}) => {
  const theme = useTheme();
  return (
    <SelectDropdown
      buttonStyle={{
        backgroundColor: theme.colors.white,
        borderRadius: theme.roundness,
        elevation: 1,
        width: '100%',
      }}
      search
      dropdownStyle={{borderRadius: theme.roundness}}
      data={items}
      onSelect={onSelect}
      buttonTextAfterSelection={buttonTextAfterSelection}
      rowTextForSelection={rowTextForSelection}
    />
  );
};

export default Dropdown;
