import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { EmailWrapper } from '../components/EmailWrapper';
import { colors } from '../theme/colors';

export default function XcoreOnboardingEmail1Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <EmailWrapper />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    ...(Platform.OS === 'web' ? { overflow: 'hidden' as const, maxHeight: '100vh' as any } : {}),
  },
});
