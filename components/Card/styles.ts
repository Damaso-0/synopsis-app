import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 'auto',
        aspectRatio: 1 / 1.5,
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        objectFit: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    }
})