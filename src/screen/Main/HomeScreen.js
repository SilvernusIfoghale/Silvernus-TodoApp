import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOR, FONTSIZES } from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DisplayScreen from './DisplayScreen';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
  //Adding the todo to the List
  // const [Todo, setTodo] = useState('');

  const navigation = useNavigation();
  function handleNext() {
    navigation.navigate('DisplayScreen');
  }

  //saving Todo information
  // const handleSubmit = async () => {
  //   try {
  //     if (Todo === '' || Todo === undefined || Todo === null) {
  //       alert('Please enter a Todo item');
  //     } else {
  //       await AsyncStorage.setItem('SavedTodo', Todo);

  //       handleNext();
  //       setTodo('');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [Username, setUserName] = useState('');
  //getting username from local storage
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('SavedUser');
      if (value !== null) {
        setUserName(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>{Username},</Text>
        <Text style={{ fontSize: FONTSIZES.big, fontWeight: 'bold' }}>
          {' '}
          Add Todo List
        </Text>
        <Text style={{ fontSize: FONTSIZES.h3 }}>Do something Good today</Text>
      </View>

      <TouchableOpacity style={styles.btnStyle} onPress={handleNext}>
        <Text style={styles.btn}>ADD NEW TASK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingHorizontal: 25,
    backgroundColor: COLOR.white,

    justifyContent: 'center',
  },
  textStyle: {
    fontSize: FONTSIZES.veryBig,
    fontWeight: 'bold',
    color: COLOR.primary,
    paddingBottom: 10,
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
