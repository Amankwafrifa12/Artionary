import React, { useContext } from 'react';
import { FontSizeContext } from '../context/FontSizeContext';
import words from '../words.json';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appConfig from '../app.json';

const APP_VERSION = appConfig.expo.version || '1.0.0';
const DEVELOPER = 'GenieHive Collective';
const PHONE = '0507808202';
const EMAIL = 'geniehivecollective@gmail.com';
const UPDATE_LINK = 'https://play.google.com/store/apps/details?id=com.genielab.Artionary';
const SHARE_MESSAGE = `🎨 Discover Artionary – the must-have art dictionary app for students, teachers, and enthusiasts! Unlock ${words.length}+ art terms. Notable features: fast search, student-friendly definitions, offline access, and favorites. Upcoming feature: GenieAI – your art terms AI assistant! Download now and elevate your art journey: ${UPDATE_LINK}`;

const About = () => {
  const { appliedFontSize } = useContext(FontSizeContext);

  const handleUpdate = () => {
    Linking.openURL(UPDATE_LINK);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={[styles.label, { color: '#333', fontWeight: 'bold', fontSize: appliedFontSize }]}>About Artionary</Text>
        <Text style={[styles.description, { fontSize: appliedFontSize }]}>Artionary is a student-friendly art dictionary with over <Text style={styles.bold}>{words.length}</Text> essential terms. Discover clear definitions, save your favorites, and explore art with confidence.</Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { color: '#333', fontWeight: 'bold', fontSize: appliedFontSize }]}>Version</Text>
        <Text style={{ color: '#6c3fc7', fontWeight: 'bold', fontSize: appliedFontSize }}>{APP_VERSION}</Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { color: '#333', fontWeight: 'bold', fontSize: appliedFontSize }]}>Developer</Text>
        <Text style={{ color: '#6c3fc7', fontWeight: 'bold', fontSize: appliedFontSize }}>{DEVELOPER}</Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { color: '#333', fontWeight: 'bold', fontSize: appliedFontSize }]}>Contact</Text>
        <TouchableOpacity style={styles.infoRow} onPress={() => Linking.openURL(`tel:${PHONE}`)}>
          <FontAwesome5 name="phone" size={20} color="#6c3fc7" style={styles.icon} />
          <Text style={[styles.info, { fontSize: appliedFontSize }]}><Text style={styles.bold}>{PHONE}</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoRow} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
          <FontAwesome5 name="envelope" size={20} color="#6c3fc7" style={styles.icon} />
          <Text style={[styles.info, { fontSize: appliedFontSize }]}><Text style={styles.bold}>{EMAIL}</Text></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update App</Text>
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
  title: {
    color: '#6c3fc7',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
    letterSpacing: 1.5,
  },
  description: {
    color: '#333',
    marginBottom: 8,
    textAlign: 'left',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 8,
  },
  info: {
    color: '#333',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
    color: '#6c3fc7',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#6c3fc7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginHorizontal: 8,
    elevation: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default About;