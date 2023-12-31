import { StyleSheet, Image,Text, View } from "react-native";
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
    setIsLoading(false);
    updateGalleryImages();
  };

  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access gallery was denied');
    }
  };

  const fetchGalleryImages = async () => {
    let photos = [];
    try {
      const albums = await MediaLibrary.getAlbumsAsync();
      const allPhotosAlbum = albums.find(album => album.title === "sql");

      if (allPhotosAlbum) {
        photos = await MediaLibrary.getAssetsAsync({
          album: allPhotosAlbum,
          mediaType: MediaLibrary.MediaType.Image ,
          first: 1000000,
        });
    
      if (photos.assets.length > 0) {
        setGalleryImages(photos.assets);
        updateGalleryImages();
      } else {
        console.log("No images found in the album.");
      }
      } else {
        console.log("L'album n'a pas été trouvé.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateGalleryImages  = () => {
    if (galleryImages.length > 0 ) {
      setFinImage(false);
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      const randomImage = galleryImages[randomIndex];
      setImageSource(randomImage);
      setGalleryImages(prevImages => prevImages.filter(img => img !== randomImage));
      console.log(galleryImages.length);
      // console.log(imageSource);
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
