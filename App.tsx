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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {FirstBlock} from './source/task1-4/FirstBlock';
// import {GradientText} from './source/task1-4/GradientText';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar hidden={true} />
      <FirstBlock />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
