import { StyleSheet, Text, View } from "react-native";
import FooterSecond from "./FooterSecond";
import NavbarSecond from "./NavbarSecond";
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Video } from 'expo-av';


export default function Videos() {
  const [videoSource, setVideoSource] = useState();
  const [galleryVideos, setGalleryVideos] = useState([]);
  const [finVideo, setFinVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cpt, setCpt] = useState(0);

  useEffect(() => {
    const initializeGallery = async () => {
      await requestGalleryPermission();
      await fetchGalleryVideos();
      if (galleryVideos.length === 0) {
        await updateGalleryVideos();
        setCpt(cpt+1);
      }
      if(galleryVideos.length > 0) {
        setIsLoading(false);
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

  const fetchGalleryVideos = async () => {
    try {
      const albums = await MediaLibrary.getAlbumsAsync();
      const allVideos = [];

      for (const album of albums) {
        const Videos = await MediaLibrary.getAssetsAsync({
          mediaType: MediaLibrary.MediaType.video,
          first: 2,
          album: album,
        });
    
if (Videos.assets.length > 0) {
        allVideos.push(...Videos.assets);
      }
    }

    if (allVideos.length > 0) {
      setGalleryVideos(allVideos);
      updateGalleryVideos();
    } else {
      console.log("No videos found.");
    }
  } catch (error) {
    console.error(error);
  }
};

  const updateGalleryVideos  = () => {
    if (galleryVideos.length > 0 ) {
      setFinVideo(false);
      const randomIndex = Math.floor(Math.random() * galleryVideos.length);
      const randomVideo = galleryVideos[randomIndex];
      setVideoSource(randomVideo);
      setGalleryVideos(prevVideos => prevVideos.filter((vid) => vid.id !== randomVideo.id ));

    }else  if(cpt !== 0 ) {
      setFinVideo(true);
    }
  };

  return (
    <View style={styles.container}>
      <NavbarSecond />
      <View style={styles.content}>
        {videoSource &&        
          <Video
          source={{ uri: videoSource.uri }}
          style={{ flex: 1, width: '100%' }}
          useNativeControls
          resizeMode="contain"
          shouldPlay 
        />}
        {finVideo && <Text style={{fontWeight: 'bold'}} >No videos available anymore. </Text>}
        {isLoading && <Text>Loading...</Text>}
      </View>
      <FooterSecond updateGallery ={updateGalleryVideos } />
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
