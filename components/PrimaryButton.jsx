import React from 'react';
import {Button} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import VectorIcon from './VectorIcon';
import {StyleSheet} from 'react-native';

const PrimaryButton = ({
  label,
  variant,
  onAction,
  iconFamily,
  iconName,
  iconSize,
  isLoading,
  buttonWidth,
}) => {
  const theme = useTheme();
  const Styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      width: buttonWidth || '100%',
      margin: 2,
    },
  });
  return (
    <Button
      // eslint-disable-next-line react/no-unstable-nested-components
      icon={() => {
        return (
          <VectorIcon
            color="white"
            iconFamily={iconFamily}
            name={iconName}
            size={iconSize}
          />
        );
      }}
      loading={isLoading}
      disabled={isLoading}
      onPress={onAction}
      rippleColor={theme.colors.surface}
      mode={variant}
      style={Styles.button}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
