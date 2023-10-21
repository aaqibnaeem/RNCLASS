import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-paper';

const MainScreen = ({navigation}: any) => {
  let photo = auth().currentUser?.photoURL || 'asd';
  React.useEffect(() => {
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
    <View>
      <View style={Styles.header}>
        <Text>Main Screen</Text>
        <Avatar.Image
          size={50}
          style={{
            backgroundColor: 'none',
          }}
          source={{
            uri: 'https://lh3.googleusercontent.com/a/ACg8ocI9uDlAJb7c9Sb1w3I0kWljbwQVosxDAqq-t7cSr1unRWA=s96-c',
          }}
        />
      </View>
      <Button
        onPress={signOut}
        mode="contained"
        buttonColor="black"
        style={{alignSelf: 'center', marginTop: '100%'}}>
        Sign Out
      </Button>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default MainScreen;
