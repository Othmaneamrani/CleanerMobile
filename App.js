import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import First from './Components/First';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.content}>
        <First />
      </View>

      <Footer style={styles.footer} />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
  },
  content: {
    backgroundColor: 'rgb(245, 245, 245)',
    flex :1,
    alignItems: 'center',
    justifyContent :'center',
  },
  footer: {

  },
});
