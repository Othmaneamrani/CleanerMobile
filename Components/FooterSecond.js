import { StyleSheet ,View,Image } from "react-native";
import iconDelete from '../assets/iconDelete.png';
import iconHeart from '../assets/iconHeart.png';
import iconChange from '../assets/iconChange.png';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

export default function FooterSecond() {

    return (
        <GestureHandlerRootView  style={styles.container} >

            <View style={styles.line}></View>
            
            <View style={styles.textContainer}>
                <TouchableOpacity style={styles.icon}><Image style={styles.image} source={iconDelete} ></Image ></TouchableOpacity>
                <TouchableOpacity style={styles.icon}><Image style={styles.image} source={iconChange} ></Image ></TouchableOpacity>
                <TouchableOpacity style={styles.icon}><Image style={styles.image} source={iconHeart} ></Image ></TouchableOpacity> 
            </View>
         </GestureHandlerRootView> 
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    image : {
        width: 30, 
        height: 30, 
    },
  });
  