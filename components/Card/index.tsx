import { Image, TouchableOpacity } from 'react-native'
import { getImageUrl } from '../../helpers/image'
import { styles } from './styles'

interface iCard {
  title: string
  id: number
  image: string

  navigation: any
  data: any
  defaultGenres: any
}

const Card = ({ title, id, image, navigation, data, defaultGenres }: iCard) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('Movie', { id, data, defaultGenres })}
      style={styles.container}>
      <Image source={{ uri: getImageUrl(image) }} style={styles.image} />
    </TouchableOpacity>
  )
}

export default Card
