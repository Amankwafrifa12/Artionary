import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import WordDetailScreen from './components/WordDetailScreen';
import About from './components/About';
import CustomHeader from './components/CustomHeader';
import { StatusBar } from 'react-native';
import AnimatedSplash from './components/AnimatedSplash';


const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <AnimatedSplash onFinish={() => setShowSplash(false)} />
      ) : (
        <NavigationContainer>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Stack.Navigator
            screenOptions={({ navigation, route }) => ({
              header: (props) => {
                let title = route.name;
                if (route.name === 'WordDetail' && props.route && props.route.params && props.route.params.word) {
                  title = props.route.params.word;
                } else if (route.name === 'Artionary') {
                  title = 'Artionary';
                }
                return (
                  <CustomHeader
                    navigation={navigation}
                    title={title}
                  />
                );
              },
            })}
          >
            <Stack.Screen name="Artionary" component={HomeScreen} />
            <Stack.Screen name="WordDetail" component={WordDetailScreen} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;