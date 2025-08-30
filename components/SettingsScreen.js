import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SettingsScreen = () => {
  const [fontSize, setFontSize] = useState('Medium');

  const fontSizeMap = { Small: 16, Medium: 20, Large: 24 };
  const appliedFontSize = fontSizeMap[fontSize] || 20;

  const handleClearHistory = () => {
    Alert.alert('Search history cleared!');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Text style={[styles.label, { fontSize: appliedFontSize }]}>Font Size</Text>
        <View style={styles.fontSizeOptions}>
          {['Small', 'Medium', 'Large'].map(size => (
            <TouchableOpacity
              key={size}
              style={[styles.fontSizeButton, fontSize === size && styles.fontSizeSelected]}
              onPress={() => setFontSize(size)}
            >
              <Text style={[styles.fontSizeText, { fontSize: appliedFontSize - 2 }]}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { fontSize: appliedFontSize }]}>History</Text>
        <TouchableOpacity style={styles.clearButton} onPress={handleClearHistory}>
          <Text style={styles.clearButtonText}>Clear History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { fontSize: appliedFontSize }]}>Links</Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://github.com/Amankwafrifa12/Artionary')}>
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { fontSize: appliedFontSize }]}>About</Text>
        <Text style={{ fontSize: appliedFontSize - 2, color: '#333', marginBottom: 8 }}>
          Artionary is a visual art dictionary designed for students and enthusiasts. Explore, learn, and discover art terms with ease.
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://github.com/Amankwafrifa12/Artionary')}>
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fc',
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c3fc7',
    marginBottom: 18,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  fontSizeOptions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  fontSizeButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: '#eee',
    marginHorizontal: 4,
  },
  fontSizeSelected: {
    backgroundColor: '#6c3fc7',
  },
  fontSizeText: {
    color: '#333',
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#6c3fc7',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkButton: {
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  linkText: {
    color: '#6c3fc7',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
