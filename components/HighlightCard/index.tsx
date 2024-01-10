import { Animated, View } from 'react-native'
import { styles } from './styles'
import { getImageUrl } from '../../helpers/image'
import { iMovie } from '../../interfaces/movie'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../constants/colors'
import ButtonComponent from '../Button'

interface IHighlightCard {
  data: iMovie
  scrollOffset: Animated.Value
  navigation: any
  genres: any
}

const HighlightCard = ({
  data,
  scrollOffset,
  navigation,
  genres,
}: IHighlightCard) => {
  const translateY = scrollOffset?.interpolate({
    inputRange: [0, 500],
    outputRange: [0, 200],
    extrapolate: 'clamp',
  })

  const width = scrollOffset?.interpolate({
    inputRange: [0, 500],
    outputRange: ['100%', '130%'],
    extrapolate: 'clamp',
  })

  return (
    translateY && (
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: getImageUrl(data?.poster_path, 'w1280') }}
          style={[styles.cover, { transform: [{ translateY }], width }]}
          resizeMode="cover"
        />

        <View style={styles.highlightContent}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', COLORS.BACKGROUND]}
            style={styles.linearGradient}>
            <ButtonComponent
              onPress={() =>
                navigation.navigate('Movie', {
                  id: data?.id,
                  data: data,
                  defaultGenres: genres,
                })
              }>
              + Datails
            </ButtonComponent>
            <ButtonComponent border backgroundTransparent>
              Add to list
            </ButtonComponent>
          </LinearGradient>
        </View>
      </View>
    )
  )
}

export default HighlightCard
