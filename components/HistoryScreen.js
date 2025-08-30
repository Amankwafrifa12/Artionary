import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontSizeContext } from '../context/FontSizeContext';
import { HistoryContext } from '../context/FontSizeContext';
import words from '../words.json';

const History = ({ navigation }) => {
  const { appliedFontSize } = useContext(FontSizeContext);
  const { history, clearHistory } = useContext(HistoryContext);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={[styles.label, { fontSize: appliedFontSize }]}>History</Text>
          {history.length === 0 ? (
            <Text style={{ color: '#888', fontSize: appliedFontSize - 2 }}>No history yet.</Text>
          ) : (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginVertical: 8 }}>
              {history.map((item, idx) => {
                const wordObj = words.find(w => w.word === item);
                return (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => navigation.navigate('WordDetail', wordObj)}
                    style={{
                      backgroundColor: '#eee',
                      borderRadius: 16,
                      paddingVertical: 6,
                      paddingHorizontal: 14,
                      marginBottom: 6,
                      marginRight: 6,
                    }}
                  >
                    <Text style={{ color: '#6c3fc7', fontSize: appliedFontSize - 2, fontWeight: 'bold' }}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
          <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
            <Text style={styles.clearButtonText}>Clear History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fc',
    padding: 24,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  clearButton: {
    backgroundColor: '#6c3fc7',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default History;
