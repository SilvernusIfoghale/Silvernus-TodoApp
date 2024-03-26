import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLOR, FONTSIZES } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import AppStack from '../../navigator/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  //saving user information
  const [User, setUser] = useState('');

  //navigation handler
  const navigation = useNavigation();
  function handleNext() {
    navigation.navigate('AppStack');
  }

  //saving user information
  const handleSubmit = async () => {
    try {
      if (User === '' || User === undefined || User === null) {
        alert('Please enter your name');
      } else {
        await AsyncStorage.setItem('SavedUser', User);
        console.log('this is the value to be passed' + User);
        handleNext();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to Silvernus Todo App</Text>

      <View style={{ height: 55, width: '90%' }}>
        <TextInput
          placeholder="Enter your Name"
          style={styles.inputStyle}
          value={User}
          onChangeText={(data) => setUser(data)}
        />
      </View>

      <TouchableOpacity style={styles.btnStyle} onPress={handleSubmit}>
        <Text style={styles.btn}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingHorizontal: 10,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    paddingTop: 100,
  },
  textStyle: {
    fontSize: FONTSIZES.h1,
    fontWeight: 'bold',
    color: COLOR.primary,
    paddingBottom: 40,
  },
  inputStyle: {
    padding: 10,
    borderColor: COLOR.black,
    borderWidth: 1,
    flex: 1,
  },
  btnStyle: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: COLOR.primary,
  },
  btn: {
    fontSize: FONTSIZES.h3,
    color: COLOR.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
