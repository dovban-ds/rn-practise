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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {data} from './source/navigation 5/data';

import FirstBlock from './source/task1-4/FirstBlock';
import Ceo from './source/navigation 5/Ceo';
import Tenk from './source/navigation 5/Tenk';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={FirstBlock}
          options={{headerShown: false}}
        />
        <Stack.Screen name={data[0].position} component={Ceo} />
        <Stack.Screen name={data[1].position} component={Tenk} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
