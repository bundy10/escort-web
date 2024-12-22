import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 29,
        marginBottom: 20,
        fontStyle: 'italic',
    },
    formContainer: {
        width: '100%', 
        padding: 20, 
    },
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
    },
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: '#000000',
        alignItems: 'center',
        borderRadius: 5,
    },


    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    logo: {
        width: 100,
        height: 120,
        marginBottom: 190,
    },
    toggleButton: {
        marginTop: 20,
    },
    errorText: {
        fontSize: 12, 
        color: 'red',
        marginBottom: 10,
    },
    linkText: {
        color: '#007BFF',
        textAlign: 'center',
    },
});
