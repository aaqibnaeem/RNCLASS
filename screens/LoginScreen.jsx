import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LoginScreen = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [showPw, togglePw] = React.useState(false);

  React.useEffect(() => {
    if (auth().currentUser !== null) {
      navigation.replace('MainScreen');
    }
  }, []);

  async function signInWithGoogle() {
    gSignIn().then(data => {
      console.log('user data=>', data);
      navigation.replace('MainScreen');
    });
  }

  const gSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.configure({
        webClientId:
          '786446331979-dr9fetefgrrktpdpdegtgj9v6rsble9a.apps.googleusercontent.com',
        offlineAccess: true,
        hostedDomain: '',
        forceCodeForRefreshToken: true,
        accountName: '',
      });

      const userInfo = await GoogleSignin.signIn();
      const {idToken} = await GoogleSignin.signIn();

      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredentials);
      return userInfo;
    } catch (error) {
      console.log(error);
    }
  };

  {
    /*
    keytool -genkeypair -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US"
    keytool -list -v -keystore "C:\Program Files\Microsoft\jdk-11.0.20.8-hotspot\bin\debug.keystore" -alias androiddebugkey -storepass android -keypass android
  */
  }

  const handleLogin = async () => {
    if (text == '') {
      Snackbar.show({
        text: 'Enter email address',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'white',
      });
    } else if (pw == '') {
      Snackbar.show({
        text: 'Enter password',
        duration: Snackbar.LENGTH_SHORT,
        margin: 20,
        backgroundColor: 'black',
        textColor: 'white',
      });
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text) == false
    ) {
      Snackbar.show({
        text: 'Enter valid email address.',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'white',
      });
    } else if (
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pw) == false
    ) {
      Snackbar.show({
        text: 'Password must be a complex one',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        textColor: 'white',
      });
    } else {
      auth()
        .createUserWithEmailAndPassword(text.toLowerCase(), pw)
        .then(res => {
          Snackbar.show({
            text: 'User submitted : ' + res.user.uid,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'black',
            textColor: 'white',
          });
          navigation.replace('MainScreen');
        })
        .catch(err => {
          if (err.code == 'auth/email-already-in-use') {
            // Alert.alert('Email Already regsitered');
            navigation.replace('MainScreen');
          }
        });
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputsWrapper}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Login / Signup
        </Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          outlineColor="black"
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Password"
          value={pw}
          onChangeText={text => setPw(text)}
          secureTextEntry={!showPw}
          right={
            <TextInput.Icon
              icon={`${showPw ? 'eye-off' : 'eye'}`}
              onPress={() => togglePw(!showPw)}
            />
          }
          outlineColor="black"
        />
        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Submit
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={signInWithGoogle}>
          Google Signin
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputsWrapper: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'black',
  },
  input: {width: '100%', marginBottom: 10},
});

export default LoginScreen;
