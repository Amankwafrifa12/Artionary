import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import About from './About';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 icon library
import words from '../words.json';
import { BannerAd, BannerAdSize, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import { BannerAds } from './BannerAds';




const HomeScreen = ({ navigation }) => {
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const sortedData = words.sort((a, b) => {
      const wordA = a.word;
      const wordB = b.word;
      if (wordA < wordB) return -1;
      if (wordA > wordB) return 1;
      return 0;
    });
    setSortedData(sortedData);
  }, []);

  const handleSearch = (text) => {
    const filteredData = words.filter((item) => {
      const itemName = item.word.toLowerCase();
      const searchText = text.toLowerCase();
      return itemName.includes(searchText);
    });
    setSortedData(filteredData);
    setSearchTerm(text);
    if (text.length > 0) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  };


  const handleClearSearch = () => {
    setSearchTerm(''); setSortedData(words); setButtonVisible(false); // Clear the search input
  };


  return (
    <View style={{ flex: 1 }}>
      {/*<TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('About')}
      >
        <FontAwesome5 name="info-circle" size={50} color="purple" />
      </TouchableOpacity>*/}

      <View style={styles.search_view}>
      
        <View style={styles.searchBar}>
          <TextInput placeholder='Type a word to search'
            clearButtonMode='always'
            autoCorrect={false}
            style={styles.search_bar}
            value={searchTerm}
            onChangeText={handleSearch}
          />

          {buttonVisible && ( // Show the clear button only if there's search text
            <TouchableOpacity style={styles.clearButton} onPress={handleClearSearch}>
              <FontAwesome5 name="times-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <BannerAd
          unitId={BannerAds.BANNER}
          size={BannerAdSize.LARGE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true
          }}
        />
        <FlatList showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          data={sortedData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('WordDetail', item)} style={{
              borderWidth: 1,
              borderColor: 'rgba(128, 128, 128, 0.1)',
              borderRadius: 8,
              marginBottom: 2

            }}>
              <Text style={{ fontWeight: "bold", margin: 10 }}>{item.word}</Text>

            </TouchableOpacity>
            
          )}
          keyExtractor={item => (item.word)}
          style={{ marginTop: 10 }}

          
        />
        
        
    
      </View>
      
    </View>
    
  )
}

export default HomeScreen;

const styles = StyleSheet.create({

  search_view: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 60
  },

  search_bar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderRadius: 5,
    borderWidth: 1
  },

  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: 'transparent', // Green button color
    margin: 10,
    padding: 2,
    elevation: 2,
    borderRadius: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1 // Add shadow
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },

  clearButton: {
    position: 'absolute',
    padding: 10,
    right: 10,

  }
})