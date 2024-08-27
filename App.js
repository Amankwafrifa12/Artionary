import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import WordDetailScreen from './components/WordDetailScreen';
import About from './components/About';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'purple', // Customize header background color
        },
        headerTitleStyle: {
          fontWeight: 'bold', // Customize header title style
        },
        headerTintColor: 'white', // Customize header text color
      }} >
        <Stack.Screen name="Artionary" component={HomeScreen} />
        <Stack.Screen name="WordDetail" component={WordDetailScreen}
          options={{
            headerShown: true, // Show header
            headerTitle: '', // No title for the WordDetails screen
          }} />
        <Stack.Screen name="About" component={About}
          options={{
            headerShown: true, // Show header
            headerTitle: 'About App', // No title for the WordDetails screen
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;