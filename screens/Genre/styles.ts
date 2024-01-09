import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: SIZES.SPACE_LARGE * 2,
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: SIZES.SPACE_MEDIUM,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: SIZES.PADDING,
        gap: SIZES.SPACE_SMALL,
        height: 50
    },
    cardsContainer: {
        paddingHorizontal: SIZES.PADDING,
        display: 'flex',
        flexDirection: 'column',
        gap: SIZES.SPACE_SMALL,
        alignItems: 'center',
        paddingBottom: SIZES.PADDING
    }
})