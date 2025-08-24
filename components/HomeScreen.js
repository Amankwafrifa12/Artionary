import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import About from './About';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 icon library
import words from '../words.json';
// Google Ads removed





const { width } = Dimensions.get('window');
const HomeScreen = ({ navigation }) => {
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonVisible, setButtonVisible] = useState(false);
  // Google Ads removed

  useEffect(() => {
    const sortedData = words.sort((a, b) => {
      const wordA = a.word;
      const wordB = b.word;
      if (wordA < wordB) return -1;
      if (wordA > wordB) return 1;
      return 0;
    });
    setSortedData(sortedData.slice(0, 20)); // Show only first 20 words initially
  }, []);

  const handleSearch = (text) => {
    const searchText = text.toLowerCase();
    let filteredData;
    if (searchText.length > 0) {
      filteredData = words.filter((item) => item.word.toLowerCase().includes(searchText));
      setButtonVisible(true);
    } else {
      // Show only first 20 words when search is cleared
      filteredData = words.slice(0, 20);
      setButtonVisible(false);
    }
    setSortedData(filteredData);
    setSearchTerm(text);
  };


  const handleClearSearch = () => {
    setSearchTerm('');
    setSortedData(words.slice(0, 20)); // Show only first 20 words when cleared
    setButtonVisible(false);
  };


  return (
    <View style={styles.container}>
      {/* Removed custom header to avoid duplicate headers */}
      <View style={styles.search_view}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Type a word to search"
            clearButtonMode="always"
            autoCorrect={false}
            style={styles.search_bar}
            value={searchTerm}
            onChangeText={handleSearch}
          />
          {buttonVisible && (
            <TouchableOpacity style={styles.clearButton} onPress={handleClearSearch}>
              <FontAwesome5 name="times-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        {sortedData.length === 0 ? (
          <View style={styles.emptyState}>
            <FontAwesome5 name="search" size={48} color="#ccc" />
            <Text style={styles.emptyText}>No words found.</Text>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            data={sortedData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('WordDetail', item)}
                style={styles.wordCard}
              >
                <Text style={styles.wordText}>{item.word}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.word}
            style={{ marginTop: 10, marginBottom: 50 }}
          />
        )}
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fc',
  },
  header: {
    backgroundColor: '#6c3fc7',
    paddingVertical: 32,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  search_view: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 60,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    marginBottom: 10,
  },
  search_bar: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
  },
  clearButton: {
    padding: 6,
    marginLeft: 8,
  },
  wordCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  wordText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6c3fc7',
    letterSpacing: 1,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    color: '#888',
    fontSize: 18,
    marginTop: 12,
  },
});