import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient as Grad} from 'react-native-gradients';

export const GradientText = () => {
  const colorList = [
    {offset: '0%', color: '#FF0000', opacity: '1'},
    {offset: '29%', color: '#00FF00', opacity: '1'},
    {offset: '67%', color: '#FF00FF', opacity: '1'},
    {offset: '100%', color: '#0000CD', opacity: '1'},
  ];
  return (
    <MaskedView
      style={{flex: 1, flexDirection: 'row'}}
      maskElement={
        <View
          style={{
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.text, {fontFamily: 'Caveat-Bold'}]}>
            First font
          </Text>
          <Text style={[styles.text, {fontFamily: 'Oswald-Bold'}]}>
            Second one
          </Text>
        </View>
      }>
      <Grad colorList={colorList} angle={45} />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 25,
    fontSize: 50,
    color: 'black',
  },
});
