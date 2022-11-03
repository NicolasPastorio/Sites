import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ColorPropType } from 'react-native'

export default props =>{
  return(
    <View style={estilos.display}>
      <Text
        style={estilos.textoDisplayOper}
        numberOfLines={1}>
        {props.valor}
      </Text>
      <Text
        style={estilos.textoDisplayRes}
        numberOfLines={1}>
        {props.res}
      </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  display:{
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#444',
    width: '100%',
  },
  textoDisplayOper:{
    fontSize: 25,
    color: '#fff',
  },
  textoDisplayRes:{
    fontSize: 50,
    color: '#fff',
  }
})
