import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import Config from 'react-native-config';
import {showMessage, hideMessage} from 'react-native-flash-message';

export const SecondBlock = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={{color: '#000', fontSize: 35}}>{Config.API_URL}</Text>
        <Button
          onPress={() => {
            showMessage({
              message: 'Simple message',
              type: 'danger',
              description: 'This is our second message',
            });
          }}
          title="Request Details"
          color="#841584"
        />
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
