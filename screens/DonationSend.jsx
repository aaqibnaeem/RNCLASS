import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {InputField, PrimaryButton, TextAreaInput} from '../components';
import {useTheme} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';

const DonationSend = () => {
  const [currentlyConnected] = useState(auth()?.currentUser.uid);
  const theme = useTheme();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [donationImg, setDonationImg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState({
    camera: false,
    picked: false,
  });
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
        imageupload(imageUri, 'picked');
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
        imageupload(imageUri, 'camera');
      }
    });
  };

  const imageupload = (imageurl, uploadType) => {
    const uploadStatus = isUploading;
    isUploading[uploadType] = true;
    setIsUploading(uploadStatus);
    const reference = storage().ref(
      'donations/' + new Date().getTime() + '.jpg',
    );
    try {
      const uploadTask = reference.putFile(imageurl);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        error => {
          console.error('Error uploading image: ', error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            const img_url = downloadURL;
            setDonationImg(img_url);
            setIsUploading({...isUploading, [uploadType]: false});
          });
        },
      );
    } catch (error) {
      console.error('Error uploading image: ', error);
      setIsUploading({...isUploading, [uploadType]: false});
    }
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const _id = firestore().collection('donations').doc().id;
    firestore()
      .collection('donations')
      .doc(_id)
      .set({
        title,
        description,
        donationImg,
        approved_status: 'Pending',
        created_at: new Date(),
        id: _id,
        uid: currentlyConnected,
      })
      .then(() => {
        setTitle('');
        setDescription('');
        setDonationImg('');
        setIsSubmitting(false);
        Snackbar.show({
          text: 'Request submitted for approval',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: theme.colors.primary,
          textColor: 'white',
        });
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, paddingBottom: 20}}>
        <Text style={styles.heading}>Send Donation</Text>
        <View>
          <Text style={{fontWeight: 'bold'}}>Title</Text>
          <InputField
            placeholder=""
            value={title}
            onChangeText={val => setTitle(val)}
            _elevation={1}
          />
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
              isLoading={isUploading.picked}
            />

            <PrimaryButton
              buttonWidth={'49%'}
              iconFamily="AA"
              iconName="camerao"
              iconSize={20}
              label="Camera"
              onAction={handleCameraLaunch}
              variant="contained"
              isLoading={isUploading.camera}
            />
          </View>
          <PrimaryButton
            label="Submit"
            variant="contained"
            onAction={handleSubmit}
            isLoading={isSubmitting}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DonationSend;
