import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AboutMe = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <FontAwesome5 name="user" size={48} color="#6c3fc7" style={{ marginBottom: 16 }} />
    <Text style={styles.title}>Kwame Amankwah Afrifa</Text>
    <Text style={styles.info}>Founder & Lead Developer, GenieHive Collective</Text>
    <View style={{ width: '100%' }}>
      <Text style={[styles.bio, { textAlign: 'left', marginBottom: 12 }]}>Born on July 10, 1999 in the vibrant town of Opon-Valley, Western Region, I’m Kwame Amankwah Afrifa—a designer, developer, and educator with a story shaped by resilience and creativity.</Text>
      <Text style={[styles.bio, { textAlign: 'left', marginBottom: 12 }]}>My journey began at Classic Brains Academy, Opon-Valley, and took me across regions and schools—from St. Mark International in Dunkwa-on-Offin to Wasa Saa D/A JHS "A" and Boa Amponsem SHS. Life threw its challenges, especially with final exams, but I never gave up. I rewrote my papers, faced setbacks head-on, and emerged stronger, earning a Diploma in Art with Distinction in 2024. Today, I’m pursuing a Bachelor of Arts in Art Education at the University of Education, Winneba.</Text>
      <Text style={[styles.bio, { textAlign: 'left', marginBottom: 12 }]}>I’m the founder of GenieLab and GenieHive Foundation, and the creative mind behind Artionary. My passion for art, technology, and education drives me to make learning accessible and engaging for all. Every project I take on is a chance to empower, inspire, and build something extraordinary.</Text>
      <Text style={[styles.bio, { textAlign: 'left' }]}>Let’s connect, collaborate, and turn challenges into triumphs. Together, we can create, innovate, and make a lasting impact!</Text>
    </View>
    <View style={styles.card}>
      <Text style={[styles.label, { color: '#333', fontWeight: 'bold', fontSize: 18 }]}>Contact</Text>
      <View style={styles.infoRow}>
        <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL('tel:0507808202')}>
          <FontAwesome5 name="phone" size={24} color="#6c3fc7" style={styles.icon} />
          <Text style={styles.contactText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL('mailto:amankwahfrifa12@gmail.com')}>
          <FontAwesome5 name="envelope" size={24} color="#6c3fc7" style={styles.icon} />
          <Text style={styles.contactText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL('https://www.linkedin.com/in/theartgenie')}>
          <FontAwesome5 name="linkedin" size={24} color="#6c3fc7" style={styles.icon} />
          <Text style={styles.contactText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL('https://www.facebook.com/kwameamankwa.afrifa')}>
          <FontAwesome5 name="facebook" size={24} color="#6c3fc7" style={styles.icon} />
          <Text style={styles.contactText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  icon: {
    marginRight: 8,
  },
  contactIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 18,
    marginBottom: 8,
  },
  contactText: {
    color: '#333',
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
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
