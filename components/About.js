import React, { useContext } from 'react';
import { FontSizeContext } from '../context/FontSizeContext';
import words from '../words.json';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Share } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appConfig from '../app.json';

const APP_VERSION = appConfig.expo.version || '1.0.0';
const DEVELOPER = 'GenieHive Collective';
const PHONE = '0507808202';
const EMAIL = 'geniehivecollective@gmail.com';
const UPDATE_LINK = 'https://play.google.com/store/apps/details?id=com.genielab.Artionary';
const SHARE_MESSAGE = `Check out Artionary by GenieHive Collective! Your ultimate art dictionary app. Download now: ${UPDATE_LINK}`;

const About = () => {
  const { appliedFontSize } = useContext(FontSizeContext);

  const handleUpdate = () => {
    Linking.openURL(UPDATE_LINK);
  };
  const handleShare = async () => {
    try {
      await Share.share({ message: SHARE_MESSAGE });
    } catch (error) {
      // handle error
    }
  };
  return (
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: appliedFontSize + 6 }]}>About Artionary</Text>
        <Text style={[styles.description, { fontSize: appliedFontSize }]}>
          Artionary (Art + Dictionary) is an ultimate dictionary of art words.  
         The dictionary contains <Text style={styles.bold}> {words.length} </Text> art terms to help you understand and explore the world of art.
        </Text>
      <Text style={[styles.info, { fontSize: appliedFontSize - 2 }]}>Version: <Text style={styles.bold}>{APP_VERSION}</Text></Text>
      <Text style={[styles.info, { fontSize: appliedFontSize - 2 }]}>Developer: <Text style={styles.bold}>{DEVELOPER}</Text></Text>
      <TouchableOpacity style={styles.infoRow} onPress={() => Linking.openURL(`tel:${PHONE}`)}>
        <FontAwesome5 name="phone" size={20} color="#6c3fc7" style={styles.icon} />
        <Text style={styles.info}><Text style={styles.bold}>{PHONE}</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.infoRow} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
        <FontAwesome5 name="envelope" size={20} color="#6c3fc7" style={styles.icon} />
        <Text style={styles.info}><Text style={styles.bold}>{EMAIL}</Text></Text>
      </TouchableOpacity>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <Text style={styles.buttonText}>Share App</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c3fc7',
    marginBottom: 18,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#6c3fc7',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 24,
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

export default About;