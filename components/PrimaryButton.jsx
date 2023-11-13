import React from 'react';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import VectorIcon from './VectorIcon';

const PrimaryButton = ({
  label,
  variant,
  onAction,
  iconFamily,
  iconName,
  iconSize,
  isLoading
}) => {
  const theme = useTheme();
  return (
    <Button
      icon={() => (
        <VectorIcon color="white" iconFamily={iconFamily} name={iconName} size={iconSize} />
      )}
      loading={isLoading}
      disabled={isLoading}
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
