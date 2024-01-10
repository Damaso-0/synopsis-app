import {
  Animated,
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { getPopularMovies } from '../../services/movie'
import { getImageUrl } from '../../helpers/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import Card from '../../components/Card'
import { Title2 } from '../../components/Title'
import SplashScreen from '../../components/SplashScreen'
import { iMovie } from '../../interfaces/movie'
import { getRandomNumber } from '../../helpers/random-number'
import { getGenres } from '../../services/genre'
import GenreButton from '../../components/GenreButton'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../constants/colors'
import Button from '../../components/Button'
import HighlightCard from '../../components/HighlightCard'

export default function Home({ navigation }: any) {
  const [contentLoaded, setContentLoaded] = useState(false)

  const [popularMovies, setPopularMovies] = useState<iMovie[]>([])
  const [highlightMovie, setHighlightMovie] = useState<iMovie | null>(null)

  const [genres, setGenres] = useState<iGenres>()

  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        data && setPopularMovies(data)
      })
      .finally(() => {
        setContentLoaded(true)
      })
  }, [])

  useEffect(() => {
    getGenres().then((data) => {
      data && data !== undefined && data !== null && setGenres(data)
    })
  }, [])

  useEffect(() => {
    if (refreshing || highlightMovie === null) {
      popularMovies.length > 0 &&
        setHighlightMovie(
          popularMovies[getRandomNumber(0, popularMovies?.length - 1)[0]]
        )
    }
  }, [popularMovies, refreshing])

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }, [])

  const scrollOffset = useRef(new Animated.Value(0)).current

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y
    scrollOffset.setValue(offsetY)
  }

  return (
    <>
      <SplashScreen contentLoaded={contentLoaded} />

      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.PRIMARY]}
            progressBackgroundColor={COLORS.BACKGROUND}
          />
        }>
        {/* ---------- Highlight movie ---------- */}

        {highlightMovie && (
          <HighlightCard
            data={highlightMovie}
            scrollOffset={scrollOffset}
            navigation={navigation}
            genres={genres}
          />
        )}

        {/* ---------- Popular movies ---------- */}
        {popularMovies.length > 0 && (
          <View>
            <Title2>Popular movies</Title2>
            <ScrollView horizontal contentContainerStyle={styles.scroll}>
              {popularMovies?.map((movie: any, index: number) => (
                <Card
                  key={movie?.id}
                  title={movie?.title}
                  id={movie?.id}
                  image={movie?.poster_path}
                  navigation={navigation}
                  data={movie}
                  defaultGenres={genres}
                />
              ))}
            </ScrollView>
          </View>
        )}

        {/* ---------- Genres ---------- */}
        {genres && genres?.movie.length > 0 && (
          <View>
            <Title2>Genres</Title2>
            <ScrollView horizontal contentContainerStyle={styles.scroll}>
              {genres?.movie &&
                genres?.movie?.map((genre: any, index: number) => (
                  <GenreButton
                    key={genre.id}
                    text={genre?.name}
                    id={genre?.id}
                    navigation={navigation}
                    data={genre}
                    defaultGenres={genres}
                  />
                ))}
            </ScrollView>
          </View>
        )}

        {/* ---------- Popular movies ---------- */}
        {popularMovies.length > 0 && (
          <View>
            <Title2>Popular movies</Title2>
            <ScrollView horizontal contentContainerStyle={styles.scroll}>
              {popularMovies?.map((movie: any, index: number) => (
                <Card
                  key={movie?.id}
                  title={movie?.title}
                  id={movie?.id}
                  image={movie?.poster_path}
                  navigation={navigation}
                  data={movie}
                  defaultGenres={genres}
                />
              ))}
            </ScrollView>
          </View>
        )}

        {/* ---------- Genres ---------- */}
        {genres && genres?.movie.length > 0 && (
          <View>
            <Title2>Genres</Title2>
            <ScrollView horizontal contentContainerStyle={styles.scroll}>
              {genres?.movie &&
                genres?.movie?.map((genre: any, index: number) => (
                  <GenreButton
                    key={genre.id}
                    text={genre?.name}
                    id={genre?.id}
                    navigation={navigation}
                    data={genre}
                    defaultGenres={genres}
                  />
                ))}
            </ScrollView>
          </View>
        )}

        {/* ---------- Popular movies ---------- */}
        {popularMovies.length > 0 && (
          <View>
            <Title2>Popular movies</Title2>
            <ScrollView horizontal contentContainerStyle={styles.scroll}>
              {popularMovies?.map((movie: any, index: number) => (
                <Card
                  key={movie?.id}
                  title={movie?.title}
                  id={movie?.id}
                  image={movie?.poster_path}
                  navigation={navigation}
                  data={movie}
                  defaultGenres={genres}
                />
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </>
  )
}
