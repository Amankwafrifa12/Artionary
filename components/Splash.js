import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import Logo from '../assets/logo.svg';
import * as SplashScreen from 'expo-splash-screen';

const PRIMARY_COLOR = '#6c3fc7';
const GRADIENT_COLORS = [PRIMARY_COLOR, '#a084e8'];

const Splash = ({ onFinish }) => {
  const [showWhite, setShowWhite] = useState(false);
  const [logoColor, setLogoColor] = useState('#fff');
  const [showGlow, setShowGlow] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.85)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const bgFadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    // Fade in and scale up logo
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Double pulse with rotation
      Animated.sequence([
        Animated.parallel([
          Animated.timing(pulseAnim, {
            toValue: 1.15,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 10,
            duration: 300,
            useNativeDriver: true,
          })
        ]),
        Animated.parallel([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: -10,
            duration: 300,
            useNativeDriver: true,
          })
        ]),
        Animated.parallel([
          Animated.timing(pulseAnim, {
            toValue: 1.12,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          })
        ]),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        // Transition background to white
        Animated.timing(bgFadeAnim, {
          toValue: 0,
          duration: 900,
          useNativeDriver: false,
        }),
        // Bounce effect
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        })
      ]).start(() => {
        setShowWhite(true);
        setLogoColor(PRIMARY_COLOR);
        setShowGlow(true);
        setTimeout(() => {
          SplashScreen.hideAsync();
          onFinish && onFinish();
        }, 700);
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={showWhite ? '#fff' : PRIMARY_COLOR} barStyle={showWhite ? 'dark-content' : 'light-content'} translucent={true} />
      <View style={styles.absoluteFill}>
  <Animated.View style={[styles.absoluteFill, { backgroundColor: PRIMARY_COLOR, opacity: bgFadeAnim }]} />
        {showWhite && <View style={[styles.absoluteFill, { backgroundColor: '#fff' }]} />}
        <View style={styles.centeredContainer}>
          <Animated.View style={{
            opacity: fadeAnim,
            transform: [
              { scale: Animated.multiply(scaleAnim, pulseAnim) },
              { rotate: rotateAnim.interpolate({ inputRange: [-10, 10], outputRange: ['-10deg', '10deg'] }) },
              { translateY: bounceAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -10] }) }
            ],
            shadowColor: showGlow ? PRIMARY_COLOR : 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: showGlow ? 0.6 : 0,
            shadowRadius: showGlow ? 24 : 0,
            elevation: showGlow ? 16 : 0,
          }}>
            <Logo width={180} height={180} fill={logoColor} />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Splash;
