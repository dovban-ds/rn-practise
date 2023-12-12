import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import {FirstBlock} from './source/task1-4/FirstBlock';
import {SecondBlock} from './source/task7-9/SecondBlock';
import FlashMessage from 'react-native-flash-message';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar hidden={true} />
      {/* <FirstBlock /> */}
      <SecondBlock />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
