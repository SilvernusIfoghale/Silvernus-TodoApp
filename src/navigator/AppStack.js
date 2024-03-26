import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Main/HomeScreen';
import DisplayScreen from '../screen/Main/DisplayScreen';

export default function AppStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
    </Stack.Navigator>
  );
}
