import React from 'react'
import {
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  View,
} from 'react-native'
import { COLORS } from '../../constants/colors'
import { SIZES } from '../../constants/sizes'

interface IButton {
  children?: string
  border?: boolean
  backgroundTransparent?: boolean
  onPress?: () => void
  disabled?: boolean
  textStyle?: TextStyle
  buttonStyle?: ViewStyle
}

const ButtonComponent = ({
  children,
  border,
  backgroundTransparent,
  onPress,
  disabled,
  textStyle,
  buttonStyle,
}: IButton) => {
  const stylesBtn: ViewStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    ...buttonStyle,
  }

  const stylesTxt: TextStyle = {
    color: COLORS.TEXT,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',

    paddingHorizontal: SIZES.SPACE_LARGE,
    paddingVertical: SIZES.SPACE_SMALL,

    borderRadius: 999,

    ...(backgroundTransparent
      ? { backgroundColor: 'transparent' }
      : { backgroundColor: COLORS.PRIMARY }),
    ...(disabled && { color: COLORS.TEXT_LIGHT }),
    ...(border && {
      borderWidth: 1,
      borderColor: COLORS.PRIMARY,
      borderRadius: 999,
    }),

    ...textStyle,
  }

  return (
    <View style={stylesBtn}>
      {children && (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          <Text style={stylesTxt}>{children}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default ButtonComponent
