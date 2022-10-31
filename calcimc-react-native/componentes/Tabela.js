import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function Tabela(){
  return(
    <View style={estilos.bloco}>
      <Image
        source={require('../assets/tabela-img.png')}
        style={estilos.tabela}
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  bloco:{
    marginBottom: 20,
    width: '100%',
  },
  tabela:{
    width: '100%',
    resizeMode: 'contain',
    marginTop: 70,
  }
})
