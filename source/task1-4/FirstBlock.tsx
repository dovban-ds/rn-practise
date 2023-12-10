import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import Svg, {Circle, SvgUri} from 'react-native-svg';
import Bridge from '../../assets/images/bridge.svg';
import Sea from '../../assets/images/sea.svg';
import Mountain from '../../assets/images/mountain.svg';
import {LinearGradient} from 'react-native-gradients';
import {LinearGradient as Wow} from 'react-native-gradients';
import {GradientText} from './GradientText';
import MaskedView from '@react-native-masked-view/masked-view';

export const FirstBlock = () => {
  const colorList = [
    {offset: '0%', color: '#231557', opacity: '1'},
    {offset: '29%', color: '#44107A', opacity: '1'},
    {offset: '67%', color: '#FF1361', opacity: '1'},
    {offset: '100%', color: '#FFF800', opacity: '1'},
  ];

  const colorList2 = [
    {offset: '0%', color: '#FF0000', opacity: '1'},
    {offset: '29%', color: '#00FF00', opacity: '1'},
    {offset: '67%', color: '#FF00FF', opacity: '1'},
    {offset: '100%', color: '#0000CD', opacity: '1'},
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.gradientBg}>
        <LinearGradient colorList={colorList} angle={45} />
      </View>
      <GradientText />
      <View>
        <Svg height={200} width="100%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="3"
            fill="lightgreen"
          />
        </Svg>
      </View>
      <View style={styles.picBox}>
        <View style={[styles.svgContainer, {width: '30%'}]}>
          <Bridge height={128} />
        </View>
        <View style={[styles.svgContainer, {width: '30%'}]}>
          <Sea height={128} />
        </View>
        <View style={[styles.svgContainer, {width: '30%'}]}>
          <Mountain height={128} style={{}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  picBox: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
  },
  svgContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100,
    overflow: 'hidden',
  },
  gradientBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
