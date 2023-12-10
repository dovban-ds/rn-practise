import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

function CardMock({data, navigation}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate(data.position)}>
        <View style={styles.wrapper}>
          <View>
            <Image
              source={{
                uri: data.icon,
              }}
              style={{width: 100, height: 100}}
            />
          </View>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.position}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 25,
  },
  text: {
    color: '#fff',
    lineHeight: 25,
    fontSize: 20,
    fontFamily: 'Oswald-Bold',
  },
});

export default CardMock;
