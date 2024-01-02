import React from 'react';
import {Image, Text, View} from 'react-native';
import {AppHeader} from '../components';

const About = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader title="About us" />
      <View style={{padding: 10, alignItems: 'center'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{height: 120, resizeMode: 'contain', marginBottom: 50}}
        />
        <Text style={{fontSize: 18, lineHeight: 30}}>
          Saylani Mass IT Training Centre is dedicated to providing high-quality
          IT education and training to individuals seeking to enhance their
          skills and advance their careers in the rapidly evolving technology
          landscape. Our mission is to empower learners with practical knowledge
          and hands-on experience, preparing them for success in the IT
          industry. We believe in making quality education accessible to
          everyone, regardless of their background or previous experience. At
          Saylani Mass IT Training Centre, we offer a range of courses taught by
          experienced professionals. Whether you're a beginner looking to start
          your IT journey or an experienced professional seeking to deepen your
          expertise, we have a program for you. Thank you for choosing Saylani
          Mass IT Training Centre as your partner in learning. We are committed
          to your success and look forward to supporting you on your educational
          journey.
        </Text>
      </View>
    </View>
  );
};
export default About;
