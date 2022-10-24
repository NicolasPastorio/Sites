import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Texto from './Texto';

export default function Botao({ texto, style }){
  return <>
    <TouchableOpacity style={[estilos.botao, style]}>
      <Texto style={estilos.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
  </>
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
  }
});
