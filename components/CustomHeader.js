import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FavoritesContext } from '../context/FontSizeContext';
import { FontSizeContext } from '../context/FontSizeContext';
import Linking from 'react-native/Libraries/Linking/Linking';
import Share from 'react-native/Libraries/Share/Share';
import appConfig from '../app.json';
import words from '../words.json';

const UPDATE_LINK = 'https://play.google.com/store/apps/details?id=com.genielab.Artionary';
const SHARE_MESSAGE = `🎨 Discover Artionary – the must-have art dictionary app for students, teachers, and enthusiasts! Unlock ${words.length}+ art terms. Notable features: fast search, student-friendly definitions, offline access, and favorites. Download now and elevate your art journey: ${UPDATE_LINK}`;

const CustomHeader = ({ navigation, title, showMenu = true }) => {
  const { appliedFontSize } = useContext(FontSizeContext);
  const { favorites } = useContext(FavoritesContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleNavigate = (screen) => {
    setDropdownVisible(false);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <FontAwesome5 name="arrow-left" size={22} color="#fff" />
          </TouchableOpacity>
        )}
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text
          style={[styles.title, { fontSize: appliedFontSize + 2 }]} 
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Favorites')}>
          <FontAwesome5 name="heart" size={22} color="#fff" solid={favorites && favorites.length > 0} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => setDropdownVisible(true)}>
          <FontAwesome5 name="ellipsis-v" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={dropdownVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
          <View style={styles.dropdownMenu}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => handleNavigate('Settings')}>
              <FontAwesome5 name="cog" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
              <Text style={[styles.dropdownText, { fontSize: appliedFontSize }]}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => handleNavigate('History')}>
              <FontAwesome5 name="history" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
              <Text style={[styles.dropdownText, { fontSize: appliedFontSize }]}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => handleNavigate('About')}>
              <FontAwesome5 name="info-circle" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
              <Text style={[styles.dropdownText, { fontSize: appliedFontSize }]}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { Linking.openURL(UPDATE_LINK); setDropdownVisible(false); }}>
              <FontAwesome5 name="sync-alt" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
              <Text style={[styles.dropdownText, { fontSize: appliedFontSize }]}>Check for Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={async () => { await Share.share({ message: SHARE_MESSAGE }); setDropdownVisible(false); }}>
              <FontAwesome5 name="share-alt" size={18} color="#6c3fc7" style={{ marginRight: 8 }} />
              <Text style={[styles.dropdownText, { fontSize: appliedFontSize }]}>Share App</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
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
  },
  title: {
  color: '#fff',
  fontWeight: 'bold',
  letterSpacing: 1.5,
  maxWidth: 180,
  overflow: 'hidden',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 56,
    marginRight: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    minWidth: 160,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#6c3fc7',
    fontWeight: 'bold',
  },
});

export default CustomHeader;
