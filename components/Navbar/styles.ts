import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/sizes";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        paddingTop: SIZES.PADDING * 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.PADDING,
        backgroundColor: 'trasparent',

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999
    },
    logo: {
        width: 40,
        height: 40,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(255, 255, 255, 0.2)',

        borderRadius: 999,
        overflow: 'hidden',

        fontSize: 22,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        lineHeight: 35,
    }
})