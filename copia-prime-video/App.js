import { StatusBar } from 'expo-status-bar';
import React from  'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <Home style={{color: '#fff'}}/>
      <StatusBar style="auto" />
    </>
  );
}
