import React, { useEffect, useRef, useState } from 'react'
import { Animated, View, StyleSheet, Easing, Text } from 'react-native'
import { COLORS } from '../../constants/colors'

const SplashScreen = ({ contentLoaded }: { contentLoaded: boolean }) => {
  const [contentLoadedState, setContentLoadedState] = useState(
    contentLoaded ?? true
  )
  const [isLoadingAnimationVisible, setLoadingAnimationVisible] =
    useState<boolean>(!contentLoadedState)

  const LoadingDot = ({ delay }: { delay: number }) => {
    const left = useRef(new Animated.Value(-300)).current

    useEffect(() => {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(left, {
            toValue: -100,
            duration: 1000,
            delay: delay,
            useNativeDriver: true,
            easing: Easing.bezier(0.2, 0, 0.8, 0.2),
          }),
          Animated.timing(left, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.bezier(0.2, 0.8, 0.8, 1),
          }),
          Animated.timing(left, {
            toValue: 300,
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.bezier(0.2, 0.8, 0.8, 1),
          }),
        ])
      )

      animation.start()

      return () => {
        animation.stop()
      }
    }, [])

    return (
      <Animated.View
        style={[styles.dot, { transform: [{ translateX: left }] }]}
      />
    )
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContentLoadedState(true)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (contentLoadedState) {
      const timeout = setTimeout(() => {
        setLoadingAnimationVisible(false)
      }, 3000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [contentLoadedState])

  return isLoadingAnimationVisible ? (
    <View style={styles.container}>
      <Text style={styles.text}>sy</Text>

      <LoadingDot delay={300} />
      <LoadingDot delay={150} />
      <LoadingDot delay={0} />
    </View>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.BACKGROUND,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 99,
    backgroundColor: COLORS.TEXT,
    borderWidth: 2,
    borderColor: COLORS.BACKGROUND,
    margin: 8,
  },
  text: {
    color: COLORS.TEXT,
    fontSize: 72,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -40 }, { translateY: -56 }],
  },
})

export default SplashScreen
