import { StatusBar } from 'expo-status-bar';
import React from  'react';
import { View, StyleSheet } from 'react-native';

//Imports personalizados
import Title from './src/componentes/Title';
import Form from './src/componentes/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
})
