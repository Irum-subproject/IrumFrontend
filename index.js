/**
 * @format
 */

import {AppRegistry, SafeAreaView, TextInput} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/components/navigation/RootNavigator';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {typo, light} from 'themes';

function App() {
  const theme = {
    palette: light,
    typo: typo,
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

export default App;
