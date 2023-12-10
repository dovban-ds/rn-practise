import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

function Tenk() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 7}}>
        <Text style={styles.text}>
          We are driven by business outcomes. We aim to help our clients have a
          bigger reach by leveraging the power of digital apps.
          {'\n'}
          TenThousand is united by our corporate values. We are ingenious,
          accountable and creative. At TenThousand, quality and delivery are
          regarded with the utmost importance, which is demonstrated in our
          values.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Oswald-Bold',
    fontSize: 20,
    lineHeight: 35,
    color: '#000',
  },
});

export default Tenk;
