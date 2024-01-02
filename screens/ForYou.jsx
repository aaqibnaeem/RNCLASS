import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {AppHeader, RequestCard} from '../components';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

const ForYou = () => {
  const isFocused = useIsFocused();
  const [requestsData, setRequestsData] = React.useState([]);
  const [currentlyConnected] = React.useState(auth()?.currentUser.uid);
  const [isFetching, setIsFetching] = React.useState(true);
  const theme = useTheme();

  useEffect(() => {
    getApprovedRequests();
    if (isFocused) {
      getApprovedRequests();
    }
  }, [isFocused]);
  const getApprovedRequests = async () => {
    setIsFetching(true);
    await firestore()
      .collection('requests')
      .get()
      .then(res => {
        setRequestsData(res.docs);
        setIsFetching(false);
      });
  };
  return (
    <View style={{flex: 1, paddingBottom: 60}}>
      <AppHeader title="Donations for you" />
      <View style={{padding: 10}}>
        {requestsData.length < 1 && !isFetching && (
          <Text style={{textAlign: 'center'}}>No data found</Text>
        )}
        {!isFetching ? (
          <FlatList
            data={requestsData}
            renderItem={data => {
              const {uid, approved_status} = data.item._data;
              if (
                uid === currentlyConnected &&
                approved_status === 'Approved'
              ) {
                return (
                  <RequestCard
                    // imageURL={imageUrl && imageUrl}
                    type={data.item._data.type}
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
    </View>
  );
};

export default ForYou;
