import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
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