import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {VectorIcon} from '../components';

var Sidebar = [
  {
    title: 'Feed',
    path: 'HomeScreen',
    iconFamily: 'IOI',
    icon: 'newspaper-outline',
  },
  {
    title: 'Request Donation',
    path: 'DonationReceive',
    iconFamily: 'MC',
    icon: 'hand-extended-outline',
  },
  {
    title: 'Send Donation',
    path: 'DonationSend',
    iconFamily: 'MC',
    icon: 'charity',
  },
  {
    title: 'For You',
    path: 'forYou',
    iconFamily: 'AA',
    icon: 'staro',
  },
];
function DrawerContent(props) {
  const theme = useTheme();

  const [userPic, setUserPic] = useState();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '786446331979-dr9fetefgrrktpdpdegtgj9v6rsble9a.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceCodeForRefreshToken: true,
      accountName: '',
    });
    setUserPic(auth()?.currentUser.photoURL);
  }, []);

  const handleLogout = async () => {
    await GoogleSignin.isSignedIn();
    await auth()
      .signOut()
      .then(() => {
        props.navigation.replace('LoginScreen');
      });
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <View>
            <View>
              <Avatar.Image
                size={80}
                color="white"
                source={{
                  uri: userPic
                    ? userPic
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspS_ukYMLvsWX4vPkC7PcTiCqJYIASaWapw&usqp=CAU',
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
                  <View style={{flexDirection: 'row', marginTop: 10}}>
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
                  icon={({size}) => (
                    <VectorIcon
                      iconFamily={v.iconFamily}
                      name={v.icon}
                      size={size}
                    />
                  )}
                  label={v.title}
                  onPress={() => {
                    props.navigation.navigate(v.path);
                  }}
                />
              );
            })}
          </Drawer.Section>
          <DrawerItem
            onPress={handleLogout}
            icon={() => <VectorIcon iconFamily="SLI" name="logout" size={25} />}
            label="Sign Out"
          />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <View>
          <Text style={{textAlign: 'center'}}>Designed by Aqib</Text>
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
