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
      <View style={estilos.bloco}>
        <Text style={estilos.label}>Infrome seu Peso:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={true}
          keyboardType='numbers-and-punctuation'
          value={peso}
          onChangeText={setPeso}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
        <Text style={estilos.label}>Informe sua Altura:</Text>
        <TextInput
          style={estilos.txt}
          autoFocus={false}
          keyboardType='numbers-and-punctuation'
          value={altura}
          onChangeText={setAltura}
        ></TextInput>
      </View>
      <View style={estilos.bloco}>
        <TouchableHighlight
          style={estilos.btnCalc}
          onPress={() => calcImc()}
        >
          <Text style={estilos.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Text>Resultado: {resultado}</Text>
      </View>
      <View style={estilos.bloco}>
        <Image
          source={require('./assets/tabela-img.png')}
          style={estilos.tabela}
        />
      </View>
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
  btnCalc:{
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  txtBtn:{
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
  tabela:{
    width: '100%',
    resizeMode: 'contain',
  }
})
