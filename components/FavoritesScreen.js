import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FavoritesContext } from '../context/FontSizeContext';
import { FontSizeContext } from '../context/FontSizeContext';
import words from '../words.json';

const FavoritesScreen = ({ navigation }) => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const { appliedFontSize } = useContext(FontSizeContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.header, { fontSize: appliedFontSize + 6 }]}>Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={{ color: '#888', fontSize: appliedFontSize - 2 }}>No favorites yet.</Text>
      ) : (
        <View style={styles.favList}>
          {favorites.map((item, idx) => {
            const wordObj = words.find(w => w.word === item);
            return (
              <View key={idx} style={styles.favItem}>
                <TouchableOpacity onPress={() => navigation.navigate('WordDetail', wordObj)}>
                  <Text style={styles.favText}>{item}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFavorite(item)} style={styles.removeButton}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f8f8fc',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c3fc7',
    marginBottom: 18,
    textAlign: 'center',
  },
  favList: {
    flexDirection: 'column',
    gap: 12,
  },
  favItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  favText: {
    color: '#6c3fc7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    marginLeft: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#6c3fc7',
    borderRadius: 12,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default FavoritesScreen;
