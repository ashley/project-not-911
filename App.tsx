import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AddToHomeScreen } from './components';
import { ThemeManager } from './context';
import { useTheme } from './context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

/**
 * @description Starting point for the entire app.
 * mimics native functionality, doesn't render anything until app is fully loaded
 */
const AppComponent = () => {
  const isLoadingComplete = useCachedResources();
  const {mode}: {mode: 'light' | 'dark'} = useTheme();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <AddToHomeScreen />
      <Navigation colorScheme={mode} />
      <StatusBar />
    </SafeAreaProvider>
  );

};

/**
 * @description Starting point for the entire app.
 * mimics native functionality, doesn't render anything until app is fully loaded
 */
export default function App() {
  return (
    <ThemeManager>
      <AppComponent />
    </ThemeManager>
  );
}
