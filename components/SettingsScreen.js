import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appConfig from '../app.json';
import words from '../words.json';

const SettingsScreen = () => {
  const [fontSize, setFontSize] = useState('Medium');

  const fontSizeMap = { Small: 16, Medium: 20, Large: 24 };
  const appliedFontSize = fontSizeMap[fontSize] || 20;

  const handleClearHistory = () => {
    Alert.alert('Search history cleared!');
  };

  const APP_VERSION = appConfig.expo.version || '1.0.0';
  const DEVELOPER = 'GenieHive Collective';
  const PHONE = '0507808202';
  const EMAIL = 'geniehivecollective@gmail.com';
  const UPDATE_LINK = 'https://play.google.com/store/apps/details?id=com.genielab.Artionary';
  const SHARE_MESSAGE = `Check out Artionary by GenieHive Collective! Your ultimate art dictionary app. Download now: ${UPDATE_LINK}`;

  const handleUpdate = () => {
    Linking.openURL(UPDATE_LINK);
  };
  const handleShare = async () => {
    try {
      await Share.share({ message: SHARE_MESSAGE });
    } catch (error) {}
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
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
            Artionary (Art + Dictionary) is your ultimate dictionary of art words. The dictionary contains <Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>{words.length}</Text> art terms to help you understand and explore the world of art.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={[styles.label, { fontSize: appliedFontSize }]}>Version</Text>
          <Text style={{ fontSize: appliedFontSize - 2, color: '#333' }}><Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>{APP_VERSION}</Text></Text>
        </View>
        <View style={styles.card}>
          <Text style={[styles.label, { fontSize: appliedFontSize }]}>Developer</Text>
          <Text style={{ fontSize: appliedFontSize - 2, color: '#333' }}><Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>{DEVELOPER}</Text></Text>
        </View>
        <View style={styles.card}>
          <Text style={[styles.label, { fontSize: appliedFontSize }]}>Contact</Text>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4, justifyContent: 'flex-start' }} onPress={() => Linking.openURL(`tel:${PHONE}`)}>
            <FontAwesome5 name="phone" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
            <Text style={{ fontSize: appliedFontSize - 2, color: '#333' }}><Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>{PHONE}</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4, justifyContent: 'flex-start' }} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
            <FontAwesome5 name="envelope" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
            <Text style={{ fontSize: appliedFontSize - 2, color: '#333' }}><Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>{EMAIL}</Text></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Update App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleShare}>
              <Text style={styles.buttonText}>Share App</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fc',
    padding: 24,
  },
  scrollContent: {
    paddingBottom: 40,
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
  button: {
    backgroundColor: '#6c3fc7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginHorizontal: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
