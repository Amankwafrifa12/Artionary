import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomHeader = ({ navigation, title, showAboutIcon = true }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
          <View>
            <TouchableOpacity onPress={() => setDropdownVisible(true)} style={styles.actionButton}>
              <FontAwesome5 name="ellipsis-v" size={22} color="#fff" />
            </TouchableOpacity>
            <Modal
              visible={dropdownVisible}
              transparent
              animationType="fade"
              onRequestClose={() => setDropdownVisible(false)}
            >
              <TouchableOpacity style={styles.modalOverlay} onPress={() => setDropdownVisible(false)} activeOpacity={1}>
                <View style={styles.dropdownMenuModal}>
                  <TouchableOpacity onPress={() => { setDropdownVisible(false); navigation.navigate('Settings'); }} style={styles.dropdownItem}>
                    <View style={styles.dropdownRow}>
                      <FontAwesome5 name="cog" size={18} color="#6c3fc7" style={styles.dropdownIcon} />
                      <Text style={styles.dropdownText}>Settings</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.dropdownDivider} />
                  <TouchableOpacity onPress={() => { setDropdownVisible(false); navigation.navigate('About'); }} style={styles.dropdownItem}>
                    <View style={styles.dropdownRow}>
                      <FontAwesome5 name="info-circle" size={18} color="#6c3fc7" style={styles.dropdownIcon} />
                      <Text style={styles.dropdownText}>About</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>
          </View>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.01)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  dropdownMenuModal: {
    marginTop: 48,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 16,
    shadowColor: '#6c3fc7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    minWidth: 140,
    paddingVertical: 10,
    paddingHorizontal: 8,
    zIndex: 9999,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginVertical: 2,
    backgroundColor: '#f8f8fc',
  },
  dropdownText: {
    color: '#6c3fc7',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  dropdownDivider: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 8,
    marginVertical: 2,
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownIcon: {
    marginRight: 10,
  },
});

export default CustomHeader;
