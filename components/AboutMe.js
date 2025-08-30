import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AboutMe = () => (
  <ScrollView contentContainerStyle={styles.container}>
  <Image source={require('../assets/about.png')} style={styles.aboutImage} />
  <View style={styles.primaryLine} />
    <Text style={styles.title}>Kwame Amankwah Afrifa</Text>
    <Text style={styles.info}>Founder GenieLab & GenieHive Collective</Text>
    <View style={{ width: '100%' }}>
      <Text style={[styles.bio, { textAlign: 'left', marginBottom: 12 }]}>
        I am <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>Kwame Amankwah Afrifa</Text>, a Graphic Designer, UI/UX Designer, and Fullstack Web Developer. I hold a Diploma in Art (Distinction) from UEW and am currently pursuing a BA in Art Education.
      </Text>
      <Text style={[styles.bio, { textAlign: 'left', marginBottom: 12 }]}>
  I am the founder of <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>GenieLab</Text> and <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>GenieHive Collective</Text>; Co-Lead of <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>Google Developer Groups on Campus UEW</Text>, and creator of impactful projects like <Text style={{ color: '#6c3fc7', fontWeight: 'bold' }}>Artionary</Text>.
      </Text>
      <Text style={[styles.bio, { textAlign: 'left' }]}>I am passionate about making knowledge accessible and empowering communities through art and technology.</Text>
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
        <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL('sms:0507808202')}>
          <FontAwesome5 name="sms" size={24} color="#6c3fc7" style={styles.icon} />
          <Text style={styles.contactText}>SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactIcon} onPress={() => Linking.openURL('https://wa.me/233507808202')}>
          <FontAwesome5 name="whatsapp" size={24} color="#6c3fc7" style={styles.icon} />
          <Text style={styles.contactText}>WhatsApp</Text>
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
  primaryLine: {
    width: 60,
    height: 4,
    backgroundColor: '#6c3fc7',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  aboutImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
    alignSelf: 'center',
  },
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
  },
  contact: {
    fontSize: 16,
    color: '#6c3fc7',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default AboutMe;
