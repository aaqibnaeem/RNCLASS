import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// const myIcon = <Icon.Button name="rocket" size={30} color="#900" />;
import ArrowIcon from 'react-native-vector-icons/AntDesign';

const LoginPractice = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "black",marginBottom:20 }}>Practice App</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('FlatList')}
        style={styles.goTo}>
        <Text style={{color:"black",fontSize:18}}>FlatList</Text>
        <ArrowIcon name='right' color="black" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Swiper')}
        style={styles.goTo}>
        <Text style={{color:"black",fontSize:18}}>Swiper</Text>
        <ArrowIcon name='right' color="black" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.goTo}>
        <Text style={{color:"black",fontSize:18}}>Login Screen</Text>
        <ArrowIcon name='right' color="black" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: "lightblue"
  },
  goTo: {
    width: '100%',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    marginHorizontal: 8,
    marginBottom:8,
    color: 'black',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    elevation:8
  },
});

export default LoginPractice;
