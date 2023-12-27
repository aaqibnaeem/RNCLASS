import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {InputField, PrimaryButton, TextAreaInput} from '../components';
import {useTheme} from 'react-native-paper';

const DonationSend = () => {
  const theme = useTheme();
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const styles = StyleSheet.create({
    heading: {
      fontSize: 30,
      marginVertical: 25,
      fontWeight: 'bold',
    },
  });
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };
  console.log(selectedImage);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, paddingBottom: 20}}>
        <Text style={styles.heading}>Send Donation</Text>
        <View>
          <Text style={{fontWeight: 'bold'}}>Title</Text>
          <InputField _elevation={1} />
        </View>
        <TextAreaInput
          label="Description"
          value={description}
          onAction={val => setDescription(val)}
        />
        <View style={{flex: 1, justifyContent: 'center', marginTop: 20}}>
          {selectedImage ? (
            <View style={{backgroundColor: '#dbdbdb'}}>
              <Image
                source={{uri: selectedImage}}
                style={{
                  height: 250,
                  borderRadius: theme.roundness,
                }}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View
              style={{
                marginTop: 20,
                minHeight: 250,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#dbdbdb',
                borderRadius: theme.roundness,
                borderWidth: 2,
                borderStyle: 'dashed',
              }}>
              <Text style={{textAlign: 'center'}}>No photo selected</Text>
            </View>
          )}
          <View
            style={{marginVertical: 10, display: 'flex', flexDirection: 'row'}}>
            <PrimaryButton
              buttonWidth={'49%'}
              iconFamily="AA"
              iconName="mobile1"
              iconSize={20}
              label="Device"
              onAction={openImagePicker}
              variant="contained"
            />

            <PrimaryButton
              buttonWidth={'49%'}
              iconFamily="AA"
              iconName="camerao"
              iconSize={20}
              label="Camera"
              onAction={handleCameraLaunch}
              variant="contained"
            />
          </View>
          <PrimaryButton label="Submit" variant="contained" />
        </View>
      </View>
    </ScrollView>
  );
};

export default DonationSend;
