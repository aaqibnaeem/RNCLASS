import React from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import UserIcon from 'react-native-vector-icons/AntDesign';
import PassIcon from 'react-native-vector-icons/MaterialIcons';
import EyeIcon from 'react-native-vector-icons/Octicons';

const InputField = ({
  value,
  onChangeText,
  iconSize,
  iconType,
  rightIcon,
  isPass,
  showPass,
  _border,
  _elevation,
  onAction,
}) => {
  const theme = useTheme();
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          paddingHorizontal: 10,
          display: 'flex',
          backgroundColor: theme.colors.surface,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: _border,
          borderRadius: theme.roundness,
          margin: 3,
          elevation: _elevation,
        }}>
        {iconType === 'user' ? (
          <UserIcon
            name="user"
            size={iconSize}
            color={theme.colors.secondary}
          />
        ) : iconType === 'password' ? (
          <PassIcon
            name="password"
            size={iconSize}
            color={theme.colors.secondary}
          />
        ) : null}
        <TextInput
          style={{color: theme.colors.text, flex: 1,paddingHorizontal:10}}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPass}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
        />
        {rightIcon && (
          <TouchableOpacity mode="none" onPress={onAction}>
            <EyeIcon
              name={isPass ? 'eye-closed' : 'eye'}
              size={iconSize}
              color={theme.colors.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
