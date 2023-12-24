import { StyleSheet, Text ,View } from "react-native";

export default function () {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <View style={styles.textContainer}>
            <Text style={styles.text} styles={styles.text}>
                Supprimer
            </Text >
            <Text style={styles.text} styles={styles.text}>
                Autre
            </Text >
            <Text style={styles.text} styles={styles.text}>
                Favoris
            </Text >
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
        bottom: 0,
        width: '100%',
        paddingBottom: 10, 
    },
    bouton: {
      backgroundColor: '#3498db', 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5, 
      alignItems: 'center',
      paddingBottom: 30
    },
    texteBouton: {
      fontSize: 16,
    },
    line : {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginTop: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5, 
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        width: "100%",
    }, 
    text: {
        marginHorizontal: 10, 
      },
  });
  