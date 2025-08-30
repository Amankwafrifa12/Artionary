import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, ScrollView, Share } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appConfig from '../app.json';
import words from '../words.json';
import { FontSizeContext } from '../context/FontSizeContext';
import { HistoryContext } from '../context/FontSizeContext';

const SettingsScreen = ({ navigation }) => {
  const { fontSize, setFontSize, appliedFontSize } = useContext(FontSizeContext);
  const { history, clearHistory } = useContext(HistoryContext);

  const handleClearHistory = () => {
    Alert.alert('Search history cleared!');
  };

  const APP_VERSION = appConfig.expo.version || '1.0.0';
  const DEVELOPER = 'GenieHive Collective';
  const PHONE = '0507808202';
  const EMAIL = 'geniehivecollective@gmail.com';
  const UPDATE_LINK = 'https://play.google.com/store/apps/details?id=com.genielab.Artionary';
  const SHARE_MESSAGE = `🎨 Discover Artionary – the must-have art dictionary app for students, teachers, and enthusiasts! Unlock ${words.length}+ art terms. Notable features: fast search, student-friendly definitions, offline access, and favorites. Upcoming feature: GenieAI – your art terms AI assistant! Download now and elevate your art journey: ${UPDATE_LINK}`;

  const handleUpdate = () => {
    Linking.openURL(UPDATE_LINK);
  };
  const handleShare = async () => {
    try {
      await Share.share({ message: SHARE_MESSAGE });
    } catch (error) {
      Alert.alert('Share Error', error?.message || 'Unable to share.');
    }
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
          {history.length === 0 ? (
            <Text style={{ color: '#888', fontSize: appliedFontSize - 2 }}>No history yet.</Text>
          ) : (
            history.map((item, idx) => {
              const wordObj = words.find(w => w.word === item);
              return (
                <TouchableOpacity key={idx} onPress={() => navigation.navigate('WordDetail', wordObj)}>
                  <Text style={{ color: '#333', fontSize: appliedFontSize - 2, textDecorationLine: 'underline' }}>{item}</Text>
                </TouchableOpacity>
              );
            })
          )}
          <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
            <Text style={styles.clearButtonText}>Clear History</Text>
          </TouchableOpacity>
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
          <Text style={[styles.label, { fontSize: appliedFontSize }]}>About</Text>
          <Text style={{ fontSize: appliedFontSize - 2, color: '#333', marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>Artionary</Text> is a student-friendly visual art dictionary app. Discover and learn <Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>{words.length}</Text> art terms. Perfect for art students, teachers, and enthusiasts.
          </Text>
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
