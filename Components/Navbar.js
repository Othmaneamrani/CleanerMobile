import { View, Text, StyleSheet , Platform} from 'react-native';

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
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginTop: 4,
        ...Platform.select({
          android: {
            elevation: 20,
          },
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
          },
        }),
      },
});