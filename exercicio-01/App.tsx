import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import{SafeAreaView} from 'react-native-safe-area-context'
import React, {useState} from 'react'

export default function ExTextInput(){
  const[name, setName] = useState('');
  const handlePress = () => {
    alert(name)
  }
   return(
     <SafeAreaView style = {styles.container}>
     <Text>Digite seu nome:</Text>
     <TextInput
        style={styles.input}
        placeholder="seu nome aqui"
        value={name}
        onChangeText={setName}
      />
    <View style={{
       marginTop: 50,
       padding: 20
     }}>
     <Button
        title="clique"
        onPress={handlePress}/>
      </View>
    </SafeAreaView>
   );
}

  const styles = StyleSheet.create({
    container: { padding: 20 },
    input:{
      borderColor: '#aaa',
      marginVertical: 10,
      paddingHorizontal: 8,
    },
  });