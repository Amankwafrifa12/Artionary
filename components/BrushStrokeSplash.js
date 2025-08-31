import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, Mask, G, Rect } from 'react-native-svg';
import Logo from '../assets/logo.svg';

const { width } = Dimensions.get('window');
const STROKE_LENGTH = 1200; // Adjust for your path
const ANIMATION_DURATION = 1600;

const BrushStrokeSplash = ({ onFinish }) => {
  const [strokeOffset, setStrokeOffset] = useState(STROKE_LENGTH);
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animatedValue = new Animated.Value(STROKE_LENGTH);
    const anim = Animated.timing(animatedValue, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    });
    const listener = animatedValue.addListener(({ value }) => {
      setStrokeOffset(value);
    });
    anim.start(() => {
      animatedValue.removeListener(listener);
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start(() => {
        // Pulse animation after logo fades in
        Animated.sequence([
          Animated.timing(logoScale, {
            toValue: 1.15,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(logoScale, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          })
        ]).start(() => {
          onFinish && onFinish();
        });
      });
    });
    return () => {
      animatedValue.removeListener(listener);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg height={220} width={width} style={styles.svg}>
        <Defs>
          <Mask id="revealMask" maskUnits="userSpaceOnUse">
            <Rect
              x={0}
              y={0}
              width={width - strokeOffset}
              height={220}
              fill="#fff"
            />
          </Mask>
        </Defs>
        {/* Logo masked by animated rectangle */}
        <G mask="url(#revealMask)">
          <Logo width={220} height={80} x={width/2-110} y={70} />
        </G>
      </Svg>
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
        <Logo width={220} height={80} />
      </Animated.View>
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
    top: '40%',
    left: 0,
  },
  logoContainer: {
    position: 'absolute',
    top: '38%',
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
});

export default BrushStrokeSplash;
