import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.BACKGROUND,
        gap: SIZES.SPACE_LARGE,
    },
    scroll: {
        paddingHorizontal: SIZES.PADDING,
        gap: SIZES.SPACE_SMALL,
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
    },
    /* ---------- Highlight media ---------- */
    highlightContainer: {
        width: '100%',
        alignItems: 'center',
        marginHorizontal: SIZES.PADDING,
        position: 'relative',
        marginLeft: 0
     },
    highlightImage: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1 / 1.5,
        marginHorizontal: SIZES.PADDING,
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: SIZES.BORDER_RADIUS,
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
    highlightTitle: {
        color: COLORS.TEXT,
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'left',
    },
    highlightDescription: {
        color: '#aaa',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'justify',
        lineHeight: 22
    },
    highlightReadMore: {
        color: COLORS.TEXT,
        fontSize: 16,
        fontWeight: '600',
        borderWidth: 1,
        borderColor: COLORS.TEXT_LIGHT,
        borderRadius: 999,
        paddingVertical: SIZES.SPACE_SMALL,
        paddingHorizontal: SIZES.SPACE_MEDIUM,
        minWidth: 120,
        textAlign: 'center',
        marginTop: SIZES.SPACE_SMALL
    }
})