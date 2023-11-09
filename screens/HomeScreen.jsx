import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Avatar, Button, useTheme} from 'react-native-paper';
import {PrimaryButton} from '../components';

const HomeSceen = ({navigation}) => {
  const theme = useTheme();
  const Styles = StyleSheet.create({
    header: {
      height: 60,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });

  let photo = auth().currentUser?.photoURL || '';
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '786446331979-dr9fetefgrrktpdpdegtgj9v6rsble9a.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceCodeForRefreshToken: true,
      accountName: '',
    });
  }, []);
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await auth()
        .signOut()
        .then(() => navigation.replace('LoginScreen'))
        .catch(err => {
          console.log(err);
          Alert.alert('Something wrong happend during signing out');
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={Styles.header}>
        <Text style={Styles.heading}>Dashboard</Text>
        {/* <Avatar.Image
          size={50}
          style={{
            backgroundColor: 'none',
          }}
          source={{
            uri: 'https://lh3.googleusercontent.com/a/ACg8ocI9uDlAJb7c9Sb1w3I0kWljbwQVosxDAqq-t7cSr1unRWA=s96-c',
          }}
        /> */}
        <View>
          <PrimaryButton
            label={'Sign out'}
            variant={'contained'}
            onAction={signOut}
          />
        </View>
        {/* <Button
          onPress={signOut}
          mode="contained"
          fontFamily="Poppins"
          buttonColor="black"
          // style={{alignSelf: 'center', marginTop: '100%'}}
        >
          Sign Out
        </Button> */}
      </View>
    </View>
  );
};

export default HomeSceen;
