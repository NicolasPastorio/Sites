import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { Nota } from "./src/componentes/Nota"
import { Picker } from "@react-native-picker/picker"
import { criaTabela, buscaNotas, selecionaNotas } from './src/servicos/Notas'

export default function App() {

  useEffect(() => {
    criaTabela()
    mostraNotas()
  }, [])

  const [notaSelecionada, setNotaSelecionada] = useState({})
  const [notas, setNotas] = useState([])
  const [categoria, setCategoria] = useState("Todos")

  async function mostraNotas(){
    const todasNotas = await buscaNotas()
    setNotas(todasNotas)
  }

  async function filtraLista(categoriaSelecionada){
    setCategoria(categoriaSelecionada)
    if(categoriaSelecionada == 'Todos'){
      mostraNotas()
    }else{
      setNotas(await selecionaNotas(categoriaSelecionada))
    }
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada}/>}
        keyExtractor={nota => nota.id}
        ListHeaderComponent={() => {return (
          <View style={estilos.modalPicker}>
            <Picker
              selectedValue={categoria}
              onValueChange={(categoriaSelecionada) => filtraLista(categoriaSelecionada)}
            >
              <Picker.Item label="Todos" value="Todos" />
              <Picker.Item label="Pessoal" value="Pessoal" />
              <Picker.Item label="Trabalho" value="Trabalho" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>
          </View>
        )}}
      />
      <NotaEditor mostraNotas={mostraNotas} notaSelecionada={notaSelecionada}
        setNotaSelecionada={setNotaSelecionada}/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    marginBottom: 16,
  },
})
