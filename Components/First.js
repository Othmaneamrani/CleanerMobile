import { StyleSheet, TouchableOpacity,Text, View, ImageBackground } from "react-native";
import Footer from "./Footer";

export default function First () {
    return (
      <View style={styles.containerAll}>
      <ImageBackground  source={require('../assets/theme.jpg')}
      style={styles.background} >
        <View style={styles.container}>
            <TouchableOpacity style={styles.bouton}>
                 <Text style={styles.texteBouton}>Start !</Text>
            </TouchableOpacity> 
        </View>
      </ImageBackground>
      <Footer />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    containerAll : {
      flex: 1,
    },
    background : {
      flex: 1,
      resizeMode: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      },
    bouton: {
        backgroundColor: '#3498db', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      texteBouton: {
        fontSize: 16,
      },
})