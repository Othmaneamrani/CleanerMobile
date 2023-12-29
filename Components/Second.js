import { StyleSheet,Button, Image,View } from "react-native";
import FooterSecond from "./FooterSecond";
import NavbarSecond from "./NavbarSecond";
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';

export default function Second () {

    const [imageSource, setImageSource] = useState(null);

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
          });
    
          if (!result.canceled) {
            if (result.assets && result.assets.length > 0) {
                setImageSource({ uri: result.assets[0].uri });
              }          }
        } catch (error) {
          console.error('Error picking an image', error);
        }
      };
    

    return (
        <View style={styles.container}>
        <NavbarSecond />
        <View style={styles.content}>
        {imageSource && <Image source={imageSource}style={{ flex: 1, width: '100%', resizeMode: 'contain'}} />}
      <Button title="Select Image" onPress={selectImage} />
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