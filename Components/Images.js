import { StyleSheet, Image,Text, View } from "react-native";
import FooterSecond from "./FooterSecond";
import NavbarSecond from "./NavbarSecond";
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';
import * as FileSystem from 'expo-file-system';


export default function Images() {
  const [imageSource, setImageSource] = useState();
  const [galleryImages, setGalleryImages] = useState([]);
  const [finImage, setFinImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cpt, setCpt] = useState(0);

  useEffect(() => {
    const initializeGallery = async () => {
      try {
        await requestGalleryPermission();
        await requestDeletePermission();
        await fetchGalleryImages();
    
        if (galleryImages.length === 0) {
          await updateGalleryImages();
          setCpt((prevCpt) => prevCpt + 1);
        }
    
        if (galleryImages.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error during initialization:', error);
      }
    };
    initializeGallery();
  }, [cpt]);


  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access gallery was denied');
    }
  };


  const requestDeletePermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to delete images was denied');
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
    if (galleryImages.length > 0 ) { 
      setFinImage(false);
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      const randomImage = galleryImages[randomIndex];
      setImageSource(randomImage);
      setGalleryImages((prevImages) => prevImages.filter((img) => img.id !== randomImage.id)
    );
    }else if(cpt !== 0 ) {
      setFinImage(true);
    }
  };


  const deleteImage = async () => {
    if (imageSource) {
      try {
        const { uri } = imageSource;
      
        // Copier le fichier dans le répertoire d'écriture de l'application
        const destinationUri = `${FileSystem.documentDirectory}deleted_image.jpg`;
        await FileSystem.copyAsync({ from: uri, to: destinationUri });
        
        // Ouvrir l'URL du fichier copié
        const scopedUri = await FileSystem.getContentUriAsync(destinationUri);
        await Linking.openURL(scopedUri);
        console.log(scopedUri);
        console.log(uri);

        // Mettre à jour la liste des images
        updateGalleryImages();
      } catch (error) {
        console.error(`Erreur lors de l'ouverture de l'URL : ${error.message}`);
      }
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
      <FooterSecond updateGallery ={updateGalleryImages}  deleteMedia={deleteImage} />
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


    // exemple de uri : file:///storage/emulated/0/Pictures/Gallery/owner/compilation /IMG-20230513-WA0011.jpg