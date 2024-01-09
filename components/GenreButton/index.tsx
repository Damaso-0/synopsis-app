import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles'

interface IGenreButton {
  text: string
  id: number
  size?: 'small' | 'medium'

  navigation: any
  data: any
  defaultGenres: any

  active?: boolean
}

const GenreButton = ({
  text,
  id,
  navigation,
  size = 'medium',
  data,
  defaultGenres,
  active = false,
}: IGenreButton) => {
  const buttonStyle = {
    ...(size === 'small' ? styles.smallSize : styles.mediumSize),
    ...(active ? styles.active : {}),
  }

  const textStyle = {
    ...(size === 'small' ? styles.smallText : styles.mediumText),
    ...(active ? styles.activeText : {}),
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Genre', { id, data, defaultGenres })}
      style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default GenreButton
