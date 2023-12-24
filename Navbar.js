import { View, Text, StyleSheet } from 'react-native';

export default function Navbar () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Rand
            </Text >
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop : 30,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
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
    }
});