import { StyleSheet, Text } from 'react-native'
import { COLORS } from '../../constants/colors'
import { ReactNode } from 'react'
import { SIZES } from '../../constants/sizes'

const Title1 = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.text1}>{children}</Text>
}

const Title2 = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.text2}>{children}</Text>
}

const Title3 = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.text3}>{children}</Text>
}

const Title4 = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.text4}>{children}</Text>
}

export { Title1, Title2, Title3, Title4 }

const styles = StyleSheet.create({
  text1: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.TEXT,
    paddingHorizontal: SIZES.PADDING,
  },
  text2: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.TEXT_LIGHT,
    paddingHorizontal: SIZES.PADDING,

    marginBottom: SIZES.SPACE_SMALL,
  },
  text3: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT,
    paddingHorizontal: SIZES.PADDING,
  },
  text4: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT_LIGHT,
    paddingHorizontal: SIZES.PADDING,
  },
})
