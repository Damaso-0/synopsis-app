import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    zIndex: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  cover: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  highlightContent: {
    width: '100%',
    height: '15%',
    gap: SIZES.SPACE_SMALL,
    borderRadius: SIZES.BORDER_RADIUS,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  linearGradient: {
    width: '100%',
    minWidth: '100%',
    height: '100%',
    padding: SIZES.PADDING,
    display: 'flex',
    flexDirection: 'row',
    gap: SIZES.SPACE_MEDIUM,
    justifyContent: 'flex-end',
  }
})