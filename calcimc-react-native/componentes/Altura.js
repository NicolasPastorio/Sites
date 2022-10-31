import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default props =>{
  return(
    <View style={estilos.bloco}>
      <Text style={estilos.label}>Informe sua Altura:</Text>
      <TextInput
        style={estilos.txt}
        autoFocus={false}
        keyboardType='numbers-and-punctuation'
        value={props.altura}
        onChangeText={text=>props.aoModificar(text)}
      ></TextInput>
    </View>
  )
}

const estilos = StyleSheet.create({
  corpo:{
    padding: 10,
  },
  bloco:{
    marginBottom: 20,
    width: '100%',
  },
  h1:{
    color: '#048',
    fontWeight: 'bold',
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
