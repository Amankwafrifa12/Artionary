import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WordDetailScreen = ({ route, navigation }) => {
  const { word, pronunciation, definition } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.wordDetails}>
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.definition}>{pronunciation}</Text>
        <Text style={styles.definition}>{definition}</Text>
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
});

