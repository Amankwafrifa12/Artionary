import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AboutMe = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <FontAwesome5 name="user" size={48} color="#6c3fc7" style={{ marginBottom: 16 }} />
    <Text style={styles.title}>Kwame Amankwah Afrifa</Text>
    <Text style={styles.info}>Founder & Lead Developer, GenieHive Collective</Text>
    <Text style={styles.bio}>
      Kwame is passionate about art, technology, and education. He created Artionary to help students and enthusiasts discover and learn art terms easily. Kwame believes in making learning accessible and engaging for everyone.
    </Text>
    <Text style={styles.contact}>Contact: kwame.amankwah.afrifa@gmail.com</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8f8fc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c3fc7',
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    color: '#444',
    marginBottom: 16,
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    color: '#6c3fc7',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default AboutMe;
