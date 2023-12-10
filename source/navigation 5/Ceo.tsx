import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import pic from '../../assets/images/viktor.jpg';

function Ceo() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 15}}>
        <View>
          <Image
            source={pic}
            style={{width: '100%', height: 300, resizeMode: 'contain'}}
          />
        </View>
        <Text style={styles.text}>
          - 11 years of commercial experience in software development {'\n'}-
          experience with blockchain, banking, ads, chatbots and other modern
          industries {'\n'}- experience with highload
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Oswald-Bold',
    fontSize: 18,
    lineHeight: 35,
    color: '#000',
  },
});

export default Ceo;
