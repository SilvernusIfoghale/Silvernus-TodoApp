import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { COLOR, FONTSIZES } from '../constants/theme';
export default function FormInput(params) {
  return (
    <View style={{ height: 55, width: '90%' }}>
      <TextInput placeholder={params.holderText} style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    padding: 10,
    borderColor: COLOR.black,
    borderWidth: 1,
    flex: 1,
  },
});
