import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Home from './screens/Home'
import MovieScreen from './screens/Movie'
import GenreScreen from './screens/Genre'
import { COLORS } from './constants/colors'
import Layout from './layout'
import { StatusBar } from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Layout>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgba(0, 0, 0, 0)"
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false,
            cardStyle: { backgroundColor: COLORS.BACKGROUND },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Movie" component={MovieScreen} />
          <Stack.Screen name="Genre" component={GenreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  )
}
