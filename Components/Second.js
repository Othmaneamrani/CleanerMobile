import { StyleSheet,Text, View } from "react-native";
import FooterSecond from "./FooterSecond";

export default function Second () {
    return (
        <View style={styles.container}>

        <View style={styles.content} >
            <Text>text</Text>
        </View>

        <FooterSecond />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    content : {
        flex:1,
    },
})