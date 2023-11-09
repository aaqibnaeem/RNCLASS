import React from 'react';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

const PrimaryButton = ({label, variant, onAction}) => {
  const theme = useTheme();
  return (
    <Button
    onPress={onAction}
      rippleColor={theme.colors.surface}
      mode={variant}
      style={{
        borderRadius: 8,
        width: '100%',
        margin: 2,
      }}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
