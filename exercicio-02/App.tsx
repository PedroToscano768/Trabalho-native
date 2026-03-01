import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function ExScrollView(){
  return(
    <ScrollView style={styles.scroll}>
      {Array.from({ length: 20 }, (_, i) => (
        <Text key={i} style={styles.item}>
          Item {i + i}
        </Text>
      ))}
    </ScrollView>
  );

}
const mario = require('./assets/mario.png');

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})