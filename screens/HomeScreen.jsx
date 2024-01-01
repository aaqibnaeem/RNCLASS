import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {AppHeader, VectorIcon, PostCard} from '../components';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
const HomeScreen = ({navigation, counts}) => {
  const [postData, setPostData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const theme = useTheme();
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    await firestore()
      .collection('posts')
      .get()
      .then(res => {
        setPostData(res.docs);
        setIsFetching(false);
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
      {!isFetching ? (
        <FlatList
          data={postData}
          renderItem={data => {
            const {imageUrl, type} = data.item._data;
            if (type !== 'video') {
              return (
                <PostCard
                  imageURL={imageUrl && imageUrl}
                  title={data.item._data.title}
                  description={data.item._data.description}
                />
              );
            }
          }}
        />
      ) : (
        <ActivityIndicator
          justifyContent="center"
          size={'large'}
          color={theme.colors.primary}
        />
      )}
    </View>
  );
};

export default HomeScreen;
