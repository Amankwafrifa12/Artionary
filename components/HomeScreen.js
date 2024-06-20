import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import About from './About';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 icon library
import words from '../words.json';




const HomeScreen = ({ navigation }) => {
  
  

    const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = words.filter(word =>{
    return word.word.includes(searchQuery);
  });
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('About')}
      >
        <FontAwesome5 name="info-circle" size={50} color="purple" />
      </TouchableOpacity>
    
    <View  style={styles.search_view}> 
    
      
      <TextInput placeholder='Type the word to search' 
      clearButtonMode='always'
      autoCorrect={false} 
      style={styles.search_bar}
      value={searchQuery}
      onChangeText={setSearchQuery}
      />
      <FlatList showsVerticalScrollIndicator={true} nestedScrollEnabled={true} data={handleSearch} renderItem={({ item }) => ( 
        <TouchableOpacity onPress={() => navigation.navigate('WordDetail', item)} style={{
          borderWidth: 1, 
          borderColor: 'rgba(128, 128, 128, 0.1)',
          borderRadius: 8,
          marginBottom: 2
          
          }}>
        <Text style={{fontWeight: "bold", margin: 10}}>{item.word}</Text>
        
      </TouchableOpacity>)}
      keyExtractor={item => item.word} 
      style={{marginTop: 10}}
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
  search_bar: {paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderBottomColor: 'black', 
    borderRadius: 5, 
    borderWidth: 1},

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
    }
})