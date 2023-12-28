import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import First from './Components/First';
import Second from './Components/Second';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Stack= createNativeStackNavigator();


  return (

    <NavigationContainer>

      <View style={styles.container}>

        <Stack.Navigator initialRouteName="First" >

          <Stack.Screen name='First' component={First} options={{headerShown:false}}/> 
          <Stack.Screen name='Second' component={Second} options={{headerShown:false}}/>

        </Stack.Navigator>

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>

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
