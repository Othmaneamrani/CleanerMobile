import { StyleSheet,Text, View } from "react-native";
import FooterSecond from "./FooterSecond";
import NavbarSecond from "./NavbarSecond";

export default function Second () {
    return (
        <View style={styles.container}>
        <NavbarSecond />
        <View style={styles.content}>
            <Text>text</Text>
        </View>
        <FooterSecond />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
      },
    content : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})