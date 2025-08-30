import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appConfig from '../app.json';
import words from '../words.json';

const APP_VERSION = appConfig.expo.version || '1.0.0';
const DEVELOPER = 'GenieHive Collective';
const PHONE = '0507808202';
const EMAIL = 'geniehivecollective@gmail.com';
const UPDATE_LINK = 'https://play.google.com/store/apps/details?id=com.genielab.Artionary';

const AboutScreen = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Version</Text>
        <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>{APP_VERSION}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Company</Text>
        <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>GenieHive Collective</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Developer</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AboutMe')}>
          <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>Kwame Amankwah Afrifa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Contact</Text>
        <TouchableOpacity style={styles.contactRow} onPress={() => Linking.openURL(`tel:${PHONE}`)}>
          <FontAwesome5 name="phone" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
          <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>{PHONE}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactRow} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
          <FontAwesome5 name="envelope" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
          <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>{EMAIL}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>About</Text>
        <Text style={{ color: '#333', marginBottom: 8 }}>
          <Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>Artionary</Text> is a student-friendly visual art dictionary app. Discover and learn <Text style={{ fontWeight: 'bold', color: '#6c3fc7' }}>{words.length}</Text> art terms. Perfect for art students, teachers, and enthusiasts.
        </Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(UPDATE_LINK)}>
          <Text style={styles.buttonText}>Update App</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fc',
    padding: 24,
  },
  scrollContent: {
    paddingBottom: 40,
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
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'flex-start',
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

export default AboutScreen;
