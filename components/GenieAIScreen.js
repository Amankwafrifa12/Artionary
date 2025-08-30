import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontSizeContext } from '../context/FontSizeContext';

const GenieAIScreen = () => {
  const { appliedFontSize } = useContext(FontSizeContext);

  return (
    <View style={styles.container}>
      <FontAwesome5 name="robot" size={64} color="#6c3fc7" style={styles.icon} />
      <Text style={[styles.title, { fontSize: appliedFontSize + 6 }]}>GenieAI Coming soon</Text>
      
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
  title: {
    color: '#6c3fc7',
    fontWeight: 'bold',
  },
  text: {
    color: '#6c3fc7',
    fontWeight: 'bold',
  },
});

export default GenieAIScreen;
