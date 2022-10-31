import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableHighlight,
  TextInput
} from 'react-native'

import Peso from './componentes/Peso'
import Altura from './componentes/Altura'
import Botao from './componentes/btnCalcular'
import Resultado from './componentes/Resultado'
import Tabela from './componentes/Tabela'

export default function calcimc(){

  const [peso, setPeso] = React.useState(0)
  const [altura, setAltura] = React.useState(0)
  const [resultado, setResultado] = React.useState(0)

  // function calcImc(){}
  const calcImc = () => {
    if(peso == 0 || !peso){
      alert('Informe o peso')
      return
    }
    if(altura == 0 || !altura){
      alert('Informe a altura')
      return
    }
    const result = peso/(Math.pow(altura, 2))
    setResultado(result.toFixed(1))
  }

  return(
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text style={estilos.h1}>Calculadora IMC</Text>
      </View>

      <Peso aoModificar={setPeso}/>
      <Altura aoModificar={setAltura}/>
      <Botao aoClicar={calcImc}/>
      <Resultado resultado={resultado}/>
      <Tabela />
      
    </SafeAreaView>
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
  },
  tabela:{
    width: '100%',
    resizeMode: 'contain',
    marginTop: 70,
  }
})
