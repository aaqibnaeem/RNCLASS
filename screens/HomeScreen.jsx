import React from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {VectorIcon} from '../components';
import AppHeader from '../components/Header';
import {useTheme} from 'react-native-paper';
import PostCard from '../components/PostCard';

const HomeScreen = ({navigation, counts}) => {
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
        data={dummy}
        renderItem={data => (
          <PostCard
            imageURL={data.item.uri}
            title={data.item.title}
            description={data.item.description}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
