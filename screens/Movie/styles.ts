import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    cover: {
        width: '100%',
        height: 'auto',
        aspectRatio: 16 / 9,
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
        opacity: 0.5
    },
    linearGradient: {
        width: '100%',
        height: 'auto',
        aspectRatio: 16 / 9,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    content: {
        width: '100%',
        marginTop: -150,
        paddingHorizontal: SIZES.PADDING,
        gap: SIZES.SPACE_LARGE,
        alignItems: 'center' 
    },
    poster: {
        width: 200,
        height: 'auto',
        aspectRatio: 1 / 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
        borderRadius: SIZES.BORDER_RADIUS,
        zIndex: 2
    },
    genres: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SIZES.SPACE_SMALL,
        justifyContent: 'center',
    },
    description: {
        color: COLORS.TEXT_LIGHT,
        textAlign: 'justify',
        fontSize: 16,
        fontWeight: '300',
        lineHeight: 24
    },
    specGrid: {
        width: '100%',
        rowGap: SIZES.SPACE_MEDIUM,
        columnGap: SIZES.SPACE_LARGE,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    specGridItem: {
        color: COLORS.TEXT_LIGHT,
        fontSize: 16,
        fontWeight: '300',
        lineHeight: 24
    }
})