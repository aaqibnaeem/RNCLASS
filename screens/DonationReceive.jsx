import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextAreaInput, PrimaryButton, InputField, Select} from '../components';
import {useTheme} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const DonationReceive = () => {
  const [currentlyConnected] = useState(auth()?.currentUser.uid);
  const [type, setType] = React.useState('');
  const [fullname, setFullName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [description, setDescription] = useState('');
  const [cnic, setCnic] = React.useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    heading: {
      fontSize: 30,
      marginVertical: 25,
      fontWeight: 'bold',
    },
  });
  const types = [
    {
      label: 'Food',
      value: 'food',
    },
    {
      label: 'Education',
      value: 'education',
    },
    {
      label: 'Health',
      value: 'health',
    },
    {
      label: 'Disaster Aid',
      value: 'disaster-aid',
    },
  ];
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const _id = firestore().collection('requests').doc().id;
    firestore()
      .collection('requests')
      .doc(_id)
      .set({
        type,
        description,
        amount,
        approved_status: 'Pending',
        created_at: new Date(),
        id: _id,
        fullname,
        cnic,
        address,
        uid: currentlyConnected,
      })
      .then(() => {
        console.log('Posted');
        setType('');
        setDescription('');
        setAmount('');
        setFullName('');
        setAddress('');
        setCnic('');
        setIsSubmitting(false);
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <KeyboardAvoidingView style={{paddingBottom: 30}}>
          <Text style={styles.heading}>Request a donation</Text>
          <View style={{gap: 20}}>
            <Select
              onAction={val => setType(val.value)}
              value={type}
              data={types}
              placeholder="Select a type"
            />
            <InputField
              placeholder="Full name"
              value={fullname}
              onChangeText={val => setFullName(val)}
              _elevation={1}
            />
            <InputField
              placeholder="CNIC"
              value={cnic}
              onChangeText={val => setCnic(val)}
              _elevation={1}
            />
            <TextAreaInput
              label="Address"
              value={address}
              onAction={val => setAddress(val)}
            />
            <TextAreaInput
              label="Description"
              value={description}
              onAction={val => setDescription(val)}
            />
            <InputField
              placeholder="Amount"
              textAlign="center"
              value={amount}
              onChangeText={val => setAmount(val)}
              _elevation={1}
            />
            <PrimaryButton
              variant="contained"
              onAction={handleSubmit}
              label="Send Request"
              isDisabled={!type || !fullname || !cnic || !address}
              isLoading={isSubmitting}
            />
          </View>

          <Text
            style={{
              textAlign: 'center',
            }}>
            Type, Full name, CNIC, Address are compulsory
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default DonationReceive;
