import { FlatList, ScrollView, View } from 'react-native'
import { iMovie } from '../../interfaces/movie'
import { Title1 } from '../../components/Title'
import { styles } from './styles'
import GenreButton from '../../components/GenreButton'
import { getMoviesByGenre } from '../../services/genre'
import { useEffect, useRef, useState } from 'react'
import Card from '../../components/Card'
import { SIZES } from '../../constants/sizes'

const GenreScreen = ({
  navigation,
  route,
}: {
  navigation: any
  route: any
}) => {
  const { id } = route.params
  const { data }: { data: iMovie } = route.params
  const { defaultGenres } = route.params

  const [genreData, setGenreData] = useState<iMovie[] | null>(null)

  const scrollRef = useRef<FlatList>(null)
  const buttonListRef = useRef<FlatList>(null)

  const index = defaultGenres?.movie.findIndex((item: any) => item.id === id)
  buttonListRef.current?.scrollToIndex({
    index,
    animated: true,
    viewOffset: SIZES.PADDING,
  })

  useEffect(() => {
    const index = defaultGenres?.movie.findIndex((item: any) => item.id === id)
    buttonListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: SIZES.PADDING,
    })

    getMoviesByGenre({ id }).then((data) => {
      setGenreData(data)
      scrollRef.current?.scrollToOffset({ offset: 0, animated: true })
    })
  }, [id])

  if (data) {
    return (
      <View style={styles.container}>
        <Title1>Genres</Title1>
        <FlatList
          ref={buttonListRef}
          onScrollToIndexFailed={() => {
            scrollRef.current?.scrollToOffset({
              offset: SIZES.PADDING,
              animated: true,
            })
          }}
          horizontal
          contentContainerStyle={styles.buttonsContainer}
          data={defaultGenres?.movie}
          renderItem={({ item }) => (
            <GenreButton
              text={item?.name}
              id={item?.id}
              navigation={navigation}
              data={data}
              defaultGenres={defaultGenres}
              active={id === item?.id}
            />
          )}
          onLayout={() => {
            scrollRef.current?.scrollToOffset({
              offset: 0,
              animated: true,
            })
          }}
        />

        <FlatList
          ref={scrollRef}
          onLayout={() => {
            scrollRef.current?.scrollToOffset({
              offset: 0,
              animated: true,
            })
          }}
          contentContainerStyle={styles.cardsContainer}
          columnWrapperStyle={{ gap: SIZES.SPACE_SMALL }}
          data={genreData}
          numColumns={2}
          renderItem={({ item }) => (
            <Card
              data={item}
              navigation={navigation}
              key={item.id}
              defaultGenres={defaultGenres}
              id={item.id}
              title={item.title}
              image={item.poster_path}
            />
          )}
        />
      </View>
    )
  }
}

export default GenreScreen
