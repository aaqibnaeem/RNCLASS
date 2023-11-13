import React from 'react';
import IconAA from 'react-native-vector-icons/AntDesign';
import IconET from 'react-native-vector-icons/Entypo';
import IconEI from 'react-native-vector-icons/EvilIcons';
import IconFT from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconF6 from 'react-native-vector-icons/FontAwesome5Pro';
import IconFI from 'react-native-vector-icons/Fontisto';
import IconFD from 'react-native-vector-icons/Foundation';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconOI from 'react-native-vector-icons/Octicons';
import IconRNI from 'react-native-vector-icons/RNIMigration';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import IconIOI from 'react-native-vector-icons/Ionicons'

const VectorIcon = props => {
  const {iconFamily, style, ...rest} = props; // Destructuring props

  let SelectedIcon = null;

  // Determine the appropriate icon component based on the iconFamily prop
  switch (iconFamily) {
    case 'AA':
      SelectedIcon = IconAA;
      break;
    case 'ET':
      SelectedIcon = IconET;
      break;
    case 'EI':
      SelectedIcon = IconEI;
      break;
    case 'FT':
      SelectedIcon = IconFT;
      break;
    case 'FA':
      SelectedIcon = IconFA;
      break;
    case 'F5':
      SelectedIcon = IconF5;
      break;
    case 'F6':
      SelectedIcon = IconF6;
      break;
    case 'FI':
      SelectedIcon = IconFI;
      break;
    case 'FD':
      SelectedIcon = IconFD;
      break;
    case 'MC':
      SelectedIcon = IconMC;
      break;
    case 'MI':
      SelectedIcon = IconMI;
      break;
    case 'OI':
      SelectedIcon = IconOI;
      break;
    case 'SLI':
      SelectedIcon = IconSLI;
      break;
    case 'IOI':
      SelectedIcon = IconIOI;
      break;
    case 'RNI':
      SelectedIcon = IconRNI;
      break;
    default:
      // Set a default icon component here if necessary
      break;
  }

  if (SelectedIcon) {
    return <SelectedIcon size={23} style={style} {...rest} />;
  }

  return null;
};

export default VectorIcon;
