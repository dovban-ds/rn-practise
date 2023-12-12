import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Config from 'react-native-config';

export const SecondBlock = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={{color: '#000', fontSize: 35}}>
          {Config.API_URL}
          {'\n'}
          {Config.GOOGLE_MAPS_API_KEY}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
