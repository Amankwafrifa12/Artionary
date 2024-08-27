import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BannerAd, BannerAdSize, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import { BannerAds } from './BannerAds';
import React, { useState, useEffect } from 'react';

const WordDetailScreen = ({ route, navigation }) => {
  const { word, pronunciation, definition } = route.params;
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const handleAdLoad = () => {
    setIsAdLoaded(true);
  };
  const handleAdError = (error) => { 
    console.error('ad failed to load', error);
    setIsAdLoaded(false);
  };

  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => Speech.speak(word, {pitch:0.8, rate: 0.8})}
      >
        <FontAwesome5 name="volume-up" size={40} color="purple" />
      </TouchableOpacity>
      <View style={styles.wordDetails}>
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.definition}>{pronunciation}</Text>
        <Text style={styles.definition}>{definition}</Text>


        {isAdLoaded && (<View style={{width: '100%', marginTop: 20}}>
    <BannerAd
       unitId={BannerAds.BANNER}
       size={BannerAdSize.LARGE_BANNER}
       onAdOpened={handleAdLoad}
       
     /> 
     
    
     </View> )}
      </View>
      
     
    </View>
  );
};

export default WordDetailScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  backButton: {
    fontSize: 16,
  },
  wordDetails: {
    marginTop: 10,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'purple'
  },
  definition: {
    fontSize: 18,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    width: 70,
    height: 70,
    backgroundColor: 'white', // Green button color
    margin: 10,
    padding: 10,
    elevation: 2,
    borderRadius: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1 // Add shadow
  }
});

