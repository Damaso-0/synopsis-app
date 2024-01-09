import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

const Navbar = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
        <Text style={styles.logo}>Sy</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar
