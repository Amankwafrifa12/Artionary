import BrushStrokeSplash from './components/BrushStrokeSplash';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import WordDetailScreen from './components/WordDetailScreen';
import About from './components/About';
import CustomHeader from './components/CustomHeader';
import { StatusBar } from 'react-native';
import GenieAIScreen from './components/GenieAIScreen';
import SettingsScreen from './components/SettingsScreen';
import AboutMe from './components/AboutMe';
import FavoritesScreen from './components/FavoritesScreen';
import History from './components/History';
import { FontSizeProvider, HistoryProvider, FavoritesProvider } from './context/FontSizeContext';


const Stack = createNativeStackNavigator();

const App = () => {
  const navigationRef = React.useRef();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <FontSizeProvider>
      <HistoryProvider>
        <FavoritesProvider>
          {showSplash ? (
            <BrushStrokeSplash onFinish={() => setShowSplash(false)} />
          ) : (
            <NavigationContainer ref={navigationRef}>
              <StatusBar backgroundColor="transparent" translucent={true} />
              <Stack.Navigator
                screenOptions={({ navigation, route }) => {
                  let title = route.name;
                  let showAboutIcon = true;
                  if (route.name === 'WordDetail') {
                    title = 'Artionary';
                  } else if (route.name === 'GenieAI') {
                    title = 'GenieAI';
                  } else if (route.name === 'Artionary') {
                    title = 'Artionary';
                  } else if (route.name === 'About') {
                    showAboutIcon = false;
                  } else if (route.name === 'AboutMe') {
                    // Responsive AboutMe header
                    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 400;
                    if (screenWidth < 400) {
                      title = 'about the dev...';
                    } else {
                      title = 'About The Developer';
                    }
                  }
                  return {
                    header: (props) => (
                      <CustomHeader
                        navigation={navigation}
                        title={title}
                        showAboutIcon={showAboutIcon}
                        key={props.route?.params?.favoritesKey || Math.random()}
                      />
                    ),
                  };
                }}
              >
                <Stack.Screen name="Artionary" component={HomeScreen} />
                <Stack.Screen name="WordDetail" component={WordDetailScreen} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="GenieAI" component={GenieAIScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="AboutMe" component={AboutMe} />
                <Stack.Screen name="Favorites" component={FavoritesScreen} />
                <Stack.Screen name="History" component={History} />
              </Stack.Navigator>
            </NavigationContainer>
          )}
        </FavoritesProvider>
      </HistoryProvider>
    </FontSizeProvider>
  );
};


export default App;