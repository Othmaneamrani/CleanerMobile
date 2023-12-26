import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navbar from './Components/Navbar';
import FooterSecond from './Components/FooterSecond';
import First from './Components/First';
import Footer from './Components/Footer';
import Second from './Components/Second';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.content}>
        <First />
        {/* <Second /> */}
      </View>

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
  },
  content: {
    flex :1,
  },
});
