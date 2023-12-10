import React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import {data} from './data';
import CardMock from './CardMock';

function Cards({nav}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <FlatList
          data={data}
          renderItem={item => <CardMock data={item.item} navigation={nav} />}
          bounces={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
});

export default Cards;
