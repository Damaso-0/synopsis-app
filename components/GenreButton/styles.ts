import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

export const styles = StyleSheet.create({
    smallSize: {
        minWidth: 60,  
        height: 26,

        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mediumSize: {
        minWidth: 100,  
        height: 40,

        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallText: {
        width: '100%',
        textAlign: 'center',
        flexWrap: 'nowrap',
        paddingHorizontal: SIZES.SPACE_SMALL,
        
        color: COLORS.TEXT_LIGHT,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16
    },
    mediumText: {
        width: '100%',
        textAlign: 'center',
        flexWrap: 'nowrap',
        paddingHorizontal: SIZES.SPACE_MEDIUM,
        
        color: COLORS.TEXT_LIGHT,
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    },
    active: {
        borderColor: COLORS.PRIMARY,
        borderWidth: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    activeText: {
        color: COLORS.PRIMARY,
    }
})