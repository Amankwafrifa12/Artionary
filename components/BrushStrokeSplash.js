import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G } from 'react-native-svg';
import Logo from '../assets/logo.svg';

const { width } = Dimensions.get('window');
// animation timing
const ANIMATION_DURATION = 1600;

const BrushStrokeSplash = ({ onFinish }) => {
  
  const logoOpacity = useRef(new Animated.Value(0)).current;
  // start slightly smaller for a subtle scale-in (clean professional reveal)
  const logoScale = useRef(new Animated.Value(0.98)).current;
  const splatter1Scale = useRef(new Animated.Value(0)).current;
  const splatter1Opacity = useRef(new Animated.Value(0)).current;
  const splatter2Scale = useRef(new Animated.Value(0)).current;
  const splatter2Opacity = useRef(new Animated.Value(0)).current;
  const splatter3Scale = useRef(new Animated.Value(0)).current;
  const splatter3Opacity = useRef(new Animated.Value(0)).current;
  const splatter4Scale = useRef(new Animated.Value(0)).current;
  const splatter4Opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Wait for the initial "brush" duration, then reveal the logo and run the enhanced animations
    const timer = setTimeout(() => {
      // reveal logo (fade in) with a clean scale-in
      Animated.parallel([
        Animated.timing(logoOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(logoScale, { toValue: 1, duration: 420, useNativeDriver: true }),
      ]).start(() => {
        // subtle splatter pops (scale + opacity only)
        Animated.stagger(90, [
          Animated.parallel([
            Animated.timing(splatter1Scale, { toValue: 1, duration: 220, useNativeDriver: true }),
            Animated.timing(splatter1Opacity, { toValue: 1, duration: 180, useNativeDriver: true }),
          ]),
          Animated.parallel([
            Animated.timing(splatter2Scale, { toValue: 1, duration: 240, useNativeDriver: true }),
            Animated.timing(splatter2Opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
          ]),
          Animated.parallel([
            Animated.timing(splatter3Scale, { toValue: 1, duration: 220, useNativeDriver: true }),
            Animated.timing(splatter3Opacity, { toValue: 1, duration: 180, useNativeDriver: true }),
          ]),
          Animated.parallel([
            Animated.timing(splatter4Scale, { toValue: 1, duration: 260, useNativeDriver: true }),
            Animated.timing(splatter4Opacity, { toValue: 1, duration: 220, useNativeDriver: true }),
          ])
        ]).start(() => {
          // fade splatters out slowly
          Animated.parallel([
            Animated.timing(splatter1Opacity, { toValue: 0, duration: 800, useNativeDriver: true }),
            Animated.timing(splatter2Opacity, { toValue: 0, duration: 900, useNativeDriver: true }),
            Animated.timing(splatter3Opacity, { toValue: 0, duration: 850, useNativeDriver: true }),
            Animated.timing(splatter4Opacity, { toValue: 0, duration: 950, useNativeDriver: true }),
          ]).start(() => onFinish && onFinish());
        });
      });
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
  <Svg height={320} width={width} style={styles.svg} />
      <Animated.View style={[styles.logoContainer, {
        opacity: logoOpacity,
        transform: [{ scale: logoScale }],
        shadowColor: '#a084e8',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 24,
        elevation: 16,
      }]}> 
        <View style={{ position: 'absolute', top: 10, left: 40, width: 60, height: 20, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.5)', opacity: 0.7 }} />
        <Logo width={260} height={100} />
  {/* shimmer removed */}
      </Animated.View>
      {/* animated splatters */}
  <Animated.View style={[styles.splatter, { left: width*0.3, top: '45%', transform: [{ scale: splatter1Scale }], opacity: splatter1Opacity, backgroundColor: '#6c3fc7' }]} />
  <Animated.View style={[styles.splatter, { left: width*0.65, top: '50%', transform: [{ scale: splatter2Scale }], opacity: splatter2Opacity, backgroundColor: '#a084e8' }]} />
  <Animated.View style={[styles.splatter, { left: width*0.22, top: '52%', transform: [{ scale: splatter3Scale }], opacity: splatter3Opacity, backgroundColor: '#f47b67' }]} />
  <Animated.View style={[styles.splatter, { left: width*0.78, top: '42%', transform: [{ scale: splatter4Scale }], opacity: splatter4Opacity, backgroundColor: '#ffd166' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
    top: '30%',
    left: 0,
  },
  logoContainer: {
    position: 'absolute',
    top: '36%',
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  debugToggle: {
    position: 'absolute',
    top: 36,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    zIndex: 50,
  },
  debugText: {
    color: '#fff',
    fontSize: 12,
  },
  splatter: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 18,
    opacity: 0,
  },
});

export default BrushStrokeSplash;
