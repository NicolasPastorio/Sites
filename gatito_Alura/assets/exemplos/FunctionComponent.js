import React, {useState, useEffect} from 'react'
import { Text } from 'react-native'

export default function MeuComponente (props){
  const [texto, atualizaTexto] = useState('Alura')

  useEffect(() => {
    console.log('componente carregado')
  }, [])

  return <Text>{texto}</Text>
}
