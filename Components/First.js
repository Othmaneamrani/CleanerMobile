import { StyleSheet, TouchableOpacity,Text, View } from "react-native";

export default function First () {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bouton}>
                 <Text style={styles.texteBouton}>Start !</Text>
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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