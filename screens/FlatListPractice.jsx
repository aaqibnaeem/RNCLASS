import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  // Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const FlatListPractice = () => {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setDataArr(res.data);
      })
      .catch(() => {
        console.log('Could not fetch data');
      });
  };

  const ListItem = ({data}) => {
    return (
      <Card style={{margin:8}}>
        <Card.Title title={data.item.title} subtitle={data.item.description} />
        <Card.Content>
          {/* <Text variant="titleLarge">{data.item.title}</Text> */}
          {/* <Text variant="bodyMedium">{data.item.description}</Text> */}
        </Card.Content>
        <Card.Cover source={{uri: data.item.image}} resizeMode='contain' />
        <Card.Actions >
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 24, margin: 10}}>
        FakeStoreAPI
      </Text>
      {dataArr.length == 0 ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      ) : null}
      <FlatList
        data={dataArr}
        renderItem={dataArr => <ListItem data={dataArr} />}
        key={new Date().getTime()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  listItem: {
    // padding: 10,
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 10,
    margin: 14,
    fontSize: 18,
    textTransform: 'capitalize',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  listItemContainer: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    margin: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FlatListPractice;
