import React from 'react'
import { Text } from 'reacct-native'

export default class MeuComponente extends React.Component {
  constructor(props){
    super(props)
    this.state = { texto: 'Alura' }
  }
  componentDidMount(){
    console.log('componente caregado')
  }
  render(){
    return <Text>{this.state.texto}</Text>
  }
}
