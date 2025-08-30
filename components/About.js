import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontSizeContext } from '../context/FontSizeContext';
import words from '../words.json';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appConfig from '../app.json';

const APP_VERSION = appConfig.expo.version || '1.0.0';
const DEVELOPER = 'Kwame Amankwah Afrifa';
const PHONE = '0507808202';
const EMAIL = 'geniehivecollective@gmail.com';
const UPDATE_LINK = 'https://play.google.com/store/apps/details?id=com.genielab.Artionary';
const SHARE_MESSAGE = `🎨 Discover Artionary – the must-have art dictionary app for students, teachers, and enthusiasts! Unlock ${words.length}+ art terms. Notable features: fast search, student-friendly definitions, offline access, and favorites. Upcoming feature: GenieAI – your art terms AI assistant! Download now and elevate your art journey: ${UPDATE_LINK}`;

const About = () => {
  const { appliedFontSize } = useContext(FontSizeContext);
  const navigation = useNavigation();

  const handleUpdate = () => {
    Linking.openURL(UPDATE_LINK);
  };
  const handleDeveloperPress = () => {
    if (navigation) navigation.navigate('AboutMe');
  };
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
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
        <TouchableOpacity onPress={handleDeveloperPress}>
          <Text style={{ color: '#6c3fc7', fontWeight: 'bold', fontSize: appliedFontSize }}>{DEVELOPER}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { color: '#333', fontWeight: 'bold', fontSize: appliedFontSize }]}>Company</Text>
        <Text style={{ color: '#6c3fc7', fontWeight: 'bold', fontSize: appliedFontSize }}>GenieHive Collective</Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.label, { color: '#333', fontWeight: 'bold', fontSize: appliedFontSize }]}>Contact</Text>
        <View style={styles.infoRow}>
          <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL(`tel:${PHONE}`)}>
            <FontAwesome5 name="phone" size={24} color="#6c3fc7" style={styles.icon} />
            <Text style={styles.contactText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL(`sms:${PHONE}`)}>
            <FontAwesome5 name="sms" size={24} color="#6c3fc7" style={styles.icon} />
            <Text style={styles.contactText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL(`https://wa.me/${PHONE.replace(/^0/, '233')}`)}>
            <FontAwesome5 name="whatsapp" size={24} color="#6c3fc7" style={styles.icon} />
            <Text style={styles.contactText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
            <FontAwesome5 name="envelope" size={24} color="#6c3fc7" style={styles.icon} />
            <Text style={styles.contactText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update App</Text>
        </TouchableOpacity>
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
  contactIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 18,
  },
  contactText: {
    color: '#333',
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default About;