import { StyleSheet, Image,Text, View, RefreshControl } from "react-native";
import FooterSecond from "./FooterSecond";
import NavbarSecond from "./NavbarSecond";
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

export default function Second() {
  const [imageSource, setImageSource] = useState();
  const [galleryImages, setGalleryImages] = useState([]);
  const [finImage, setFinImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeGallery();
  }, []);

  const initializeGallery = async () => {
    await requestGalleryPermission();
    await fetchGalleryImages();
    await updateGalleryImages();
    setIsLoading(false);
  };

  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access gallery was denied');
    }
  };

  const fetchGalleryImages = async () => {
    try {
      const albums = await MediaLibrary.getAlbumsAsync();
      const allImages = [];

      for (const album of albums) {
        const photos = await MediaLibrary.getAssetsAsync({
          mediaType: MediaLibrary.MediaType.Image,
          first: 2,
          album: album,
        });
    
if (photos.assets.length > 0) {
        allImages.push(...photos.assets);
      }
    }

    if (allImages.length > 0) {
      setGalleryImages(allImages);
      updateGalleryImages();
    } else {
      console.log("No images found.");
    }
  } catch (error) {
    console.error(error);
  }
};

  const updateGalleryImages  = () => {
    if (galleryImages.length > 0 ) {   // kayji l false d had condition
      setFinImage(false);
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      const randomImage = galleryImages[randomIndex];
      setImageSource(randomImage);
      setGalleryImages(prevImages => prevImages.filter(img => img !== randomImage));
    }else {
      setFinImage(true);
    }
  };

  return (
    <View style={styles.container}>
      <NavbarSecond />
      <View style={styles.content}>
        {imageSource && <Image source={imageSource} style={{ flex: 1, width: '100%', resizeMode: 'contain' }} />}
        {finImage && <Text style={{fontWeight: 'bold'}} >No images available anymore. </Text>}
        {isLoading && <Text>Loading...</Text>}
      </View>
      <FooterSecond updateGalleryImages ={updateGalleryImages } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
