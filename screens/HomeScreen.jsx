import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {AppHeader, VectorIcon, PostCard} from '../components';
import {useTheme} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
const HomeScreen = ({navigation, counts}) => {
  const [postData, setPostData] = useState([]);
  const theme = useTheme();
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  const dummy = [
    {
      uri: 'https://s.rozee.pk/company_logos/44/cpx_61643045395191.png',
      title: 'BitsPro',
      description:
        'BitsPro software house specialized in tailored apps specially for business to manage their inventory and accounts in a centralized app.',
    },
    {
      uri: 'https://s.rozee.pk/company_logos/44/cpx_61643045395191.png',
      title: 'BitsPro',
      description:
        'BitsPro software house specialized in tailored apps specially for business to manage their inventory and accounts in a centralized app.',
    },
    {
      uri: 'https://s.rozee.pk/company_logos/44/cpx_61643045395191.png',
      title: 'BitsPro',
      description:
        'BitsPro software house specialized in tailored apps specially for business to manage their inventory and accounts in a centralized app.',
    },
    {
      uri: 'https://s.rozee.pk/company_logos/44/cpx_61643045395191.png',
      title: 'BitsPro',
      description:
        'BitsPro software house specialized in tailored apps specially for business to manage their inventory and accounts in a centralized app.',
    },
  ];
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    await firestore()
      .collection('posts')
      .get()
      .then(res => {
        setPostData(res.docs);
      });
  };
  return (
    <View style={Styles.container}>
      <AppHeader
        title={'Feed'}
        rightElement={
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <VectorIcon
              iconFamily={'AA'}
              name={'menu-fold'}
              size={20}
              color={theme.colors.secondary}
            />
          </TouchableOpacity>
        }
      />
      <FlatList
        data={postData}
        renderItem={data => {
          console.log(data);
          return (
            <PostCard
              // imageURL={data.item.uri}
              title={data.item._data.title}
              description={data.item._data.description}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
