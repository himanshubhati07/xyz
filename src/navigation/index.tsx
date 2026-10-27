import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import XcoreOnboardingEmail1Screen from '../screens/XcoreOnboardingEmail1Screen';
import NotFoundScreen from '../screens/NotFoundScreen';

export type RootStackParamList = {
  XcoreOnboardingEmail1: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="XcoreOnboardingEmail1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="XcoreOnboardingEmail1" component={XcoreOnboardingEmail1Screen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
