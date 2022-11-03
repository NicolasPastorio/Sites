import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions } from 'react-native'

export default props =>{

  const estilosBotoes = [estilos.btn]
  if(props.duplo){
    estilosBotoes.pus(estilos.btnDuplo)
  }
  if(props.igual){
    estilosBotoes.push(estilos.btnIgual)
  }
  if(props.operacao){
    estilosBotoes.push(estilos.btnOperacao)
  }
  if(props.ac){
    estilosBotoes.push(estilos.btnAC)
  }
  if(props.bs){
    estilosBotoes.push(estilos.btnBS)
  }

  return(
    <TouchableHighlight
      onPress={props.aoClicar}
    >
      <Text style={estilosBotoes}>
        {props.label}
      </Text>
    </TouchableHighlight>
  )
}

const estilos = StyleSheet.create({
  btn:{
    fontSize: 30,
    height: Dimensions.get('window').width/4,
    width: Dimensions.get('window').width/4,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
  },
  btnDuplo:{
    width: (Dimensions.get('window').width/4)*2,
  },
  btnOperacao:{
    color: 'olive',
  },
  btnIgual:{
    color: 'tomato',
  },
  btnAC:{
    color: '#ff0',
  },
  btnBS:{
    color: '#0ff',
  },
})
