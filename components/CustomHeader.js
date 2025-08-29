import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomHeader = ({ navigation, title, showAboutIcon = true }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <FontAwesome5 name="arrow-left" size={22} color="#fff" />
          </TouchableOpacity>
        )}
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSection}>
        {showAboutIcon && (
          <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.actionButton}>
            <FontAwesome5 name="info-circle" size={22} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6c3fc7',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 36,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 6,
    shadowColor: '#6c3fc7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 10,
  },
  backButton: {
    marginRight: 10,
  },
});

export default CustomHeader;
