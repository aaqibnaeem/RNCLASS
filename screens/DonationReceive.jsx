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

const DonationReceive = () => {
  const [type, setType] = React.useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const theme = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    heading: {
      fontSize: 30,
      marginVertical: 25,
      fontWeight: 'bold',
      textAlign: 'center',
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
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <KeyboardAvoidingView>
          <Text style={styles.heading}>Request a donation</Text>
          <View style={{padding: 20, gap: 20}}>
            <Select
              onAction={val => setType(val.value)}
              value={type}
              data={types}
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
            />
            <PrimaryButton
              variant="contained"
              onAction={handleSubmit}
              label="Send Request"
              _elevation={theme.elevation}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default DonationReceive;
