import { StyleSheet ,View,Image } from "react-native";
import iconDelete from '../assets/iconDelete.png';
import iconHeart from '../assets/iconHeart.png';
import iconChange from '../assets/iconChange.png';

export default function FooterSecond() {
    return (
        <View style={styles.container}>

            <View style={styles.line}></View>
            
            <View style={styles.textContainer}>
                <Image style={styles.icon} source={iconDelete} ></Image >
                <Image style={styles.icon} source={iconChange} ></Image >
                <Image style={styles.icon} source={iconHeart} ></Image >
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
    icon: {
        width: 25, 
        height: 25, 
        marginHorizontal: 10,
    },

  });
  