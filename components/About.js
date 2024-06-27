import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import aboutApp from '../app.json';

const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      

        
        <FlatList showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          data={aboutApp}
          renderItem={({ item }) => (
            <View><Text>Version: {item.version}</Text></View>
            )}
            keyExtractor={item => (item.version)}
          style={{ marginTop: 10 }}
        />
      
    </View>
  )
}
export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      }
})