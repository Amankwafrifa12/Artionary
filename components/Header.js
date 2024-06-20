import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Artionary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple', // Replace with your desired background color
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Replace with your desired text color
  },
});

export default Header;
