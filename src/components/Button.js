import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLOR, FONTSIZES } from '../constants/theme';

export default function Button(params) {
  return (
    <TouchableOpacity style={styles.btnStyle}>
      <Text style={styles.btn}>{params.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
