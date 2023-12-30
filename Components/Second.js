import { StyleSheet, Image, View } from "react-native";
import FooterSecond from "./FooterSecond";
import NavbarSecond from "./NavbarSecond";
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';

export default function Second() {
  const [imageSource, setImageSource] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    requestGalleryPermission();
    fetchGalleryImages();
  }, []);

  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access gallery was denied');
    }
  };

  const fetchGalleryImages = async () => {
    try {
      const result = await ImagePicker.getMediaLibraryAsync ({
        mediaType: ImagePicker.MediaTypeOptions.Images,
      });

      if (result?.assets && result.assets.length > 0) {
        const randomIndex = Math.floor(Math.random() * result.assets.length);
        const randomImage = result.assets[randomIndex];
        if (randomImage) {
          setImageSource({ uri: randomImage.uri });
          setGalleryImages(prevImages => prevImages.filter(img => img !== randomImage));
        }
      }
    } catch (error) {
      console.error('Error fetching gallery images', error);
    }
  };

  const updateGalleryImages  = () => {
    if (galleryImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      const randomImage = galleryImages[randomIndex];
      setImageSource({ uri: randomImage.uri });
      setGalleryImages(prevImages => prevImages.filter(img => img !== randomImage));
    }
  };

  return (
    <View style={styles.container}>
      <NavbarSecond />
      <View style={styles.content}>
        {imageSource && <Image source={imageSource} style={{ flex: 1, width: '100%', resizeMode: 'contain' }} />}
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
