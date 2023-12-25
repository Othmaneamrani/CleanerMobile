import { StyleSheet, Text ,View } from "react-native";

export default function () {
    return (
        <View style={styles.container}>

            <View style={styles.line}></View>
            
            <View style={styles.textContainer}>
                <Text style={styles.red}> Supprimer </Text >
                <Text style={styles.text}> Autre </Text >
                <Text style={styles.green}> Favoris </Text >
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop : 0,
        width: '100%',
    },
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'black',
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
    red: {
        marginHorizontal: 10, 
        color: "red",
    },
    green: {
        marginHorizontal: 10,
        color: "green",
    },
  });
  