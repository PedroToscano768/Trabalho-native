import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet } from 'react-native';

export default function App() {
  const [itens, setItens] = useState<string[]>([]);
  const [texto, setTexto] = useState('');

  const adicionarItem = () => {
    if (texto.trim() !== '') {
      setItens([...itens, texto]);
      setTexto('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um novo item..."
        value={texto}
        onChangeText={setTexto}
      />
      
      <Button title="Adicionar" onPress={adicionarItem} />

      <ScrollView style={styles.scroll}>
        {itens.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60, 
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  scroll: {
    marginTop: 20,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});