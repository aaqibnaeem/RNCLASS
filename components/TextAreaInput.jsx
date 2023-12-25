import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const TextAreaInput = ({label = 'label', value, onAction}) => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{fontWeight: 600, fontSize: 16, marginBottom: 5}}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onAction}
        multiline
        numberOfLines={10}
        style={{
          height: 200,
          textAlignVertical: 'top',
          elevation: 1,
          backgroundColor: theme.colors.surface,
          borderRadius: theme.roundness,
          padding: 10,
        }}
      />
    </View>
  );
};

export default TextAreaInput;
