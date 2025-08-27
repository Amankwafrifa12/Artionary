import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const WordDetailScreen = ({ route }) => {
  const { word, pronunciation, definition } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wordDetails}>
          <Text style={styles.word}>{word}</Text>
          <Text style={styles.definition}>{pronunciation}</Text>
          <Text style={styles.definition}>{definition}</Text>
        </View>
      </ScrollView>

      {/* Floating button stays above */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => Speech.speak(word, { pitch: 0.8, rate: 0.8 })}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="volume-up" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default WordDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fc',
    padding: 20,
  },
  scrollContent: {
    paddingBottom: 120, // extra space so text isn't covered by button
  },
  wordDetails: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    alignItems: 'center',
  },
  word: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6c3fc7',
    textAlign: 'center',
  },
  definition: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    width: 56,
    height: 56,
    backgroundColor: '#6c3fc7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    elevation: 6, // Android shadow
    shadowColor: '#6c3fc7', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    zIndex: 100, // keep above everything
  },
});
