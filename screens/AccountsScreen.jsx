import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppHeader from '../components/Header';
import {useTheme} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import {InputField, PrimaryButton, VectorIcon} from '../components';
import firestore from '@react-native-firebase/firestore';

const ProductsScreen = ({navigation}) => {
  const [account, setAccount] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [belong, setBelong] = useState('');
  const [loading, setIsLoading] = useState(false);

  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    content: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      padding: 20,
    },
  });
  const handleSubmit = () => {
    const obj = {
      account,
      address,
      type,
      belong,
    };
    if (obj.account) {
      setIsLoading(true);
      setAccount('');
      setAddress('');
      setType('');
      setBelong('');
      firestore()
        .collection('Accounts')
        .add(obj)
        .then(() => {
          Snackbar.show({
            text: 'Account added',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: theme.colors.primary,
            textColor: 'white',
          });
          setIsLoading(false);
        });
    } else {
      Snackbar.show({
        text: 'Please provide Account name',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: theme.colors.error,
        textColor: 'white',
      });
    }
  };
  return (
    <View style={styles.container}>
      <AppHeader
        title={'Accounts Registeration'}
        rightElement={
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <VectorIcon
              iconFamily={'AA'}
              name={'menu-fold'}
              size={25}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        }
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 40,
        }}>
        Register your Accounts
      </Text>
      <View style={styles.content}>
        <View style={{width: '100%', marginBottom: 200}}>
          <InputField
            value={account}
            _elevation={2}
            placeholder={'Enter Account name'}
            onChangeText={text => setAccount(text)}
          />
          <InputField
            value={address}
            _elevation={2}
            placeholder={'Enter Address'}
            onChangeText={text => setAddress(text)}
          />
          <InputField
            value={type}
            _elevation={2}
            placeholder={'Enter Type'}
            onChangeText={text => setType(text)}
          />
          <InputField
            value={belong}
            _elevation={2}
            placeholder={'Enter Belong'}
            onChangeText={text => setBelong(text)}
          />
          <View style={{marginTop: 20}}>
            <PrimaryButton
              iconFamily="AA"
              iconName="pluscircleo"
              color="white"
              label={'Add Account'}
              variant={'contained'}
              onAction={handleSubmit}
              isLoading={loading}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductsScreen;
