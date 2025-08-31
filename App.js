import BrushStrokeSplash from './components/BrushStrokeSplash';
import React, { useState, useEffect } from 'react';
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
  // track whether the splash animation finished and whether resources are ready
  const [splashFinished, setSplashFinished] = useState(false);
  const [resourcesReady, setResourcesReady] = useState(false);

  // preload async resources (fonts, images, remote config, etc.)
  useEffect(() => {
    let mounted = true;
    const prepare = async () => {
      try {
        // Add any resource loading here (fonts, images, remote data).
        // Keep this minimal to avoid adding dependencies; replace with expo-font / Asset if available.
        await new Promise((res) => setTimeout(res, 600)); // small safety delay
        // Warm up expo-speech module so first use is snappy (guarded if not installed)
        try {
          // dynamic import lets bundler preload the module without failing if missing
          const Speech = await import('expo-speech');
          // if TTS provides a voice listing API, call it to warm up native resources
          if (Speech && Speech.getAvailableVoicesAsync) {
            try {
              await Speech.getAvailableVoicesAsync();
            } catch (e) {
              // ignore voice enumeration errors
            }
          } else if (Speech && Speech.speak) {
            // fallback: perform a very short silent speak if supported (some platforms accept empty text)
            try {
              Speech.speak('', { rate: 1.0 });
            } catch (e) {
              // ignore
            }
          }
        } catch (e) {
          // not installed or unavailable — that's fine, just skip
        }
      } catch (e) {
        // ignore failures for now; resource loading should be resilient
        console.warn('Resource preloading failed', e);
      } finally {
        if (mounted) setResourcesReady(true);
      }
    };
    prepare();
    return () => { mounted = false; };
  }, []);

  return (
    <>
      {!(splashFinished && resourcesReady) ? (
        // Render only the splash until both animation and resources are ready
        <BrushStrokeSplash onFinish={() => setSplashFinished(true)} />
      ) : (
        // Mount providers and navigation only after splash completes
        <FontSizeProvider>
          <HistoryProvider>
            <FavoritesProvider>
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
            </FavoritesProvider>
          </HistoryProvider>
        </FontSizeProvider>
      )}
    </>
  );
};


export default App;