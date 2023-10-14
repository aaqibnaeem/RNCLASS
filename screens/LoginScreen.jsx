import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

const LoginScreen = () => {
  const [text, setText] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [showPw, togglePw] = React.useState(false);

  const handleLogin = () => {
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
      console.log(text);
      auth()
        .createUserWithEmailAndPassword(text.toLowerCase(), pw)
        .then(res => {
          Snackbar.show({
            text: 'User submitted : ' + res.user.uid,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'black',
            textColor: 'white',
          });
        })
        .catch(err => {
          if (err.code == 'auth/email-already-in-use') {
            Alert.alert('Email ALready regsiter');
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
    paddingVertical:20
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'black',
  },
  input: {width: '100%', marginBottom: 10},
});

export default LoginScreen;
