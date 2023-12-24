import { View, Text, StyleSheet } from 'react-native';

export default function Navbar () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                CleanDom
            </Text >
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop : 30,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        top: 0,
        width: '100%',
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold',
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
    }
});