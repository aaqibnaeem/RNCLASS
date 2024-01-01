import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import IconButton from './IconButton';
import YoutubePlayer from 'react-native-youtube-iframe';

const PostCard = ({
  imageURL,
  title,
  description,
  type = 'regular',
  videoID,
}) => {
  const theme = useTheme();
  const Styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      padding: 10,
      borderRadius: theme.roundness,
      borderColor: theme.colors.borderColor,
      elevation: 1,
      margin: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.colors.secondary,
    },
    thumbnail: {width: '100%', height: 200},
    actions: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
      marginVertical: 10,
    },
  });
  return (
    <View style={Styles.container}>
      {imageURL && (
        <Image
          source={{
            uri: imageURL,
          }}
          resizeMode="contain"
          style={Styles.thumbnail}
        />
      )}
      {type === 'video' && (
        <View>
          <YoutubePlayer height={250} videoId={videoID} play={false} />
        </View>
      )}
      <View>
        <Text style={Styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={Styles.actions}>
        <IconButton
          iconFamily={'AA'}
          name={'heart'}
          size={18}
          color={theme.colors.secondary}
          onPress={() => console.log('pressed')}
        />
        <IconButton
          iconFamily={'F5'}
          name={'share'}
          size={18}
          color={theme.colors.secondary}
          onPress={() => console.log('pressed')}
        />
      </View>
    </View>
  );
};

export default PostCard;
