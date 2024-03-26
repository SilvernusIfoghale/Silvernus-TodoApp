import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
export default function SplashScreen() {
  const navigation = useNavigation();

  function handleNext() {
    navigation.navigate('LoginScreen');
  }

  useEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/Todo-logo.png')}
          style={{ height: 230, width: 230 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
