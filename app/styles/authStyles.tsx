import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#000000',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
    },
    toggleButton: {
        marginTop: 20,
    },
});
