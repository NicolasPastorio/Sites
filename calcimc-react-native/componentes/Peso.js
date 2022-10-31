import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default props => {
  return(
    <View style={estilos.bloco}>
      <Text style={estilos.label}>Infrome seu Peso:</Text>
      <TextInput
        style={estilos.txt}
        autoFocus={true}
        keyboardType='numbers-and-punctuation'
        value={props.peso}
        onChangeText={props.aoModificar}
      ></TextInput>
    </View>
  )
}

const estilos = StyleSheet.create({
  bloco:{
    marginBottom: 20,
    width: '100%',
  },
  label:{
    color: '#048',
  },
  txt:{
    width: '100%',
    borderWidth: 1,
    borderColor: '#048',
    padding: 10,
    borderRadius: 10,
  }
})

/* 
<TextInput
  style={estilos.txt}
  autoFocus={true}
  keyboardType={'numeric'}
  value={props.peso}
  onChangeText={text=>props.aoModificar(text)}
></TextInput>
*/
