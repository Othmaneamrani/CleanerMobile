import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function App() {
  return (
    <View >
      <Navbar />
    <View style={styles.container}>

    <TouchableOpacity style={styles.bouton}>
      <Text style={styles.texteBouton}>Appuyez-moi</Text>
    </TouchableOpacity> 

    <StatusBar style="auto" />
    </View>
    <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouton: {
    backgroundColor: '#3498db', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, 
    alignItems: 'center',
    marginTop: 10,
  },
  texteBouton: {
    fontSize: 16,
  }
});
