import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const GenieAIScreen = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="robot" size={64} color="#6c3fc7" style={styles.icon} />
      <Text style={styles.text}>GenieAI coming soon.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8fc',
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    color: '#6c3fc7',
    fontWeight: 'bold',
  },
});

export default GenieAIScreen;
