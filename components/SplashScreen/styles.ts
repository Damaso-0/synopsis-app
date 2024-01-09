import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16161d',
    },
    text: {
        color: COLORS.TEXT,
        fontSize: 64,
        fontWeight: '600',
        textAlign: 'center',
    },
    dot1: {
        width: 16,
        height: 16,
        borderRadius: 99,
        backgroundColor: COLORS.TEXT,
        borderWidth: 2,
        borderColor: COLORS.PRIMARY
    },
    dot2: {
        width: 16,
        height: 16,
        borderRadius: 99,
        backgroundColor: COLORS.TEXT,
        borderWidth: 2,
        borderColor: COLORS.PRIMARY
    },
    dot3: {
        width: 16,
        height: 16,
        borderRadius: 99,
        backgroundColor: COLORS.TEXT,
        borderWidth: 2,
        borderColor: COLORS.PRIMARY
    }
})