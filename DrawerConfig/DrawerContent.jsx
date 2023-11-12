import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
} from 'react-native-paper';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { VectorIcon } from '../components';

var Sidebar = [
  {
    title: 'Home',
    path: 'HomeScreen',
    iconFamily: "AA",
    icon: "home"
  },
  {
    title: 'Products',
    path: 'ProductsScreen',
    iconFamily: "FT",
    icon: "box"
  },
  {
    title: 'Accounts',
    path: 'Accounts',
    iconFamily: "AA",
    icon: "user"
  },
  {
    title: 'Stock In',
    path: 'StockIn',
    iconFamily: "AA",
    icon: "arrowdown"
  },
  {
    title: 'Stock Out',
    path: 'StockOut',
    iconFamily: "AA",
    icon: "arrowup"
  }, {
    title: 'Expense',
    path: 'ExpenseScreen',
    iconFamily: "AA",
    icon: "wallet"
  }

];
function DrawerContent(props) {
  const theme = useTheme()

  const [userPic, setUserPic] = useState()
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '786446331979-dr9fetefgrrktpdpdegtgj9v6rsble9a.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceCodeForRefreshToken: true,
      accountName: '',
    });
    setUserPic(auth()?.currentUser.photoURL)
  }, []);
  console.log('->', auth);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          {/* header */}
          <View>
            <View
            // source={{
            //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu9qZHSRiMOqjbLmZidt10ailLsX9wNTLpe1erMyUs24TZT3y7Bd8J3NVVuga8mMEW5g&usqp=CAU',
            // }}
            // style={{width: '100%', height: 180, marginTop: '-2%'}}
            >
              <Avatar.Image
                size={80}
                color="white"
                source={{
                  uri: userPic ? userPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspS_ukYMLvsWX4vPkC7PcTiCqJYIASaWapw&usqp=CAU',
                }}
                style={{
                  backgroundColor: theme.colors.background,
                  resizeMode: 'contain',
                  marginTop: '12%',
                  marginLeft: '10%',
                }}
              />

              <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View
                      style={{
                        paddingTop: 8,
                        marginLeft: 15,
                        flexDirection: 'column',
                      }}>
                      <Title style={styles.title}>Name:</Title>
                      <Caption style={styles.caption}>Email</Caption>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            {Sidebar.map((v, i) => {
              return (
                <DrawerItem
                  key={i}
                  icon={({ size }) => <VectorIcon iconFamily={v.iconFamily} name={v.icon} size={size} />}
                  label={v.title}
                  onPress={() => {
                    props.navigation.navigate(v.path);
                  }}
                />
              );
            })}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <View>
          <Text style={{ textAlign: 'center' }}>Designed by Aqib</Text>
        </View>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  Text: {
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '-15%',
    marginLeft: '10%',
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '10%',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
