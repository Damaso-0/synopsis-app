import { Image, Text, View } from 'react-native'
import { iMovie } from '../../interfaces/movie'
import { styles } from './styles'
import { getImageUrl } from '../../helpers/image'
import { Title1, Title4 } from '../../components/Title'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../constants/colors'
import GenreButton from '../../components/GenreButton'
import { ScrollView } from 'react-native-gesture-handler'

const MovieScreen = ({
  navigation,
  route,
}: {
  navigation: any
  route: any
}) => {
  const { id } = route.params
  const { data }: { data: iMovie } = route.params
  const { defaultGenres } = route.params

  const genres =
    defaultGenres &&
    defaultGenres.movie.filter((genre: iGenre) =>
      data?.genre_ids.includes(genre.id)
    )

  return (
    data && (
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', COLORS.BACKGROUND]}
          style={styles.linearGradient}></LinearGradient>
        <Image
          source={{ uri: getImageUrl(data?.backdrop_path) }}
          style={styles.cover}
        />

        <View style={styles.content}>
          {data?.poster_path && (
            <Image
              source={{ uri: getImageUrl(data?.poster_path) }}
              style={styles.poster}
            />
          )}
          {data?.title && <Title1>{data?.title}</Title1>}

          {genres && (
            <View style={styles.genres}>
              {genres.map((genre: iGenre) => (
                <GenreButton
                  key={genre.id}
                  id={genre.id}
                  text={genre.name}
                  size="small"
                  navigation={navigation}
                  data={data}
                  defaultGenres={defaultGenres}
                />
              ))}
            </View>
          )}

          {data?.overview && (
            <Text style={styles.description}>{data?.overview}</Text>
          )}

          <View style={styles.specGrid}>
            {data?.release_date && (
              <Text style={styles.specGridItem}>
                <Title4>Release Date:</Title4>{' '}
                {new Date(data?.release_date).toDateString()}
              </Text>
            )}
            {data?.vote_average && (
              <Text style={styles.specGridItem}>
                <Title4>Votes:</Title4> {data?.vote_average.toFixed(1)}
              </Text>
            )}
            {data?.popularity && (
              <Text style={styles.specGridItem}>
                <Title4>Popularity:</Title4> {data?.popularity}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    )
  )
}

export default MovieScreen
