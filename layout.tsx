import { StyleSheet, View } from 'react-native'
import { COLORS } from './constants/colors'

const Layout = ({
  children,
  navigation,
}: {
  children: JSX.Element
  navigation: any
}) => {
  return (
    <View style={styles.container}>
      {/* <Navbar navigation={navigation} /> */}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
})

export default Layout
