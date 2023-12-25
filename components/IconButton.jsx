import React from 'react';
import VectorIcon from './VectorIcon';
import {TouchableOpacity} from 'react-native';

const IconButton = ({iconFamily, name, size, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <VectorIcon
        iconFamily={iconFamily}
        name={name}
        size={size}
        color={color}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
