import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {InputField, PrimaryButton} from '../components';

const SignupScreen = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [showPw, togglePw] = React.useState(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 40,
    },
    inputsWrapper: {
      width: '100%',
      backgroundColor: theme.colors.background,
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
    input: {width: '100%'},
    headingContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      width: '100%',
    },
    headingTitle: {fontWeight: 'bold', fontSize: 32, textAlign: 'center'},
    subHeading: {
      textAlign: 'center',
      marginBottom: 20,
      color: theme.colors.secondary,
    },
    buttonContainer: {marginTop: 10, width: '100%'},
    noteContainer: {color: theme.colors.secondary, marginTop: 30},
  });

  React.useEffect(() => {
    if (auth().currentUser !== null) {
      navigation.replace('MainScreen');
    }
  }, []);

  async function signInWithGoogle() {
    gSignIn().then(data => {
      if (data) {
        navigation.replace('MainScreen');
      }
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

  const handleLogin = async () => {
    if (text === '') {
      Snackbar.show({
        text: 'Enter email address',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: theme.colors.primary,
        textColor: 'white',
      });
    } else if (pw === '') {
      Snackbar.show({
        text: 'Enter password',
        duration: Snackbar.LENGTH_SHORT,
        margin: 20,
        backgroundColor: theme.colors.primary,
        textColor: 'white',
      });
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text) === false
    ) {
      Snackbar.show({
        text: 'Enter valid email address.',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: theme.colors.error,
        textColor: 'white',
      });
    } else if (
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pw) === false
    ) {
      Snackbar.show({
        text: 'Password must be a complex one',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: theme.colors.error,
        textColor: 'white',
      });
    } else {
      auth()
        .createUserWithEmailAndPassword(text.toLowerCase(), pw)
        .then(() => {
          navigation.replace('MainScreen');
        })
        .catch(err => {
          if (err.code == 'auth/email-already-in-use') {
            Snackbar.show({
              text: 'Email already regestered.',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: theme.colors.secondary,
              textColor: 'white',
            });
            // navigation.replace('MainScreen');
          }
        });
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.headingContainer}>
        <Text style={styles.headinTitle}>Create Account</Text>
        <Text style={styles.subHeading}>Create a new account.</Text>
        <InputField
          iconSize={18}
          value={text}
          onChangeText={text => setText(text)}
          iconType={'user'}
          _border={0}
          _elevation={2}
          rightIcon={false}
        />
        <InputField
          iconSize={18}
          value={pw}
          onChangeText={text => setPw(text)}
          iconType={'password'}
          isPass={showPw}
          rightIcon={true}
          _border={0}
          _elevation={2}
          onAction={() => togglePw(!showPw)}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            label={'CREATE'}
            variant="contained"
            onAction={handleLogin}
          />
          <PrimaryButton
            variant={'contained'}
            label={'CONTINUE WITH GOOGLE'}
            onAction={signInWithGoogle}
          />
          <Text style={styles.noteContainer}>
            Already have an account ?{' '}
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={{color: theme.colors.primary}}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
