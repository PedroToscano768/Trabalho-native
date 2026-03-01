import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
const mario = require('./assets/mario.png');
const bowser = require('./assets/bowser.png');
const leonardo = require('./assets/leonardo.png');
const link = require('./assets/link.png');
const luigi = require('./assets/luigi.png');
const mlkFeio = require('./assets/mlk-feio.png');
const imagens = [mario, bowser, leonardo, link, luigi, mlkFeio];

export default function ExScrollView(){
  return(
    <ScrollView style={styles.scroll}>
      {imagens.map((imagemAtual, i) => (
        <View key={i} style={styles.item}>
          <Image source={imagemAtual} style={styles.imagemItem} />
          <Text style={styles.text}>Personagem {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imagemItem: {
    width: 300,
    height: 300,
    marginRight: 15,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
  }
})