import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import XcoreOnboardingEmail1Screen from './XcoreOnboardingEmail1Screen';

test('renders without crashing', () => {
  render(
    <NavigationContainer>
      <XcoreOnboardingEmail1Screen />
    </NavigationContainer>,
  );
});
