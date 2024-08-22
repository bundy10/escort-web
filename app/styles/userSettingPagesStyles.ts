import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40, // Pushes the content down
        backgroundColor: 'white',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#f0f0f0', // Light grey background
        padding: 20,
        borderRadius: 10, // Curved edges
    },
    balanceText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    cashOutButton: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    cashText: {
        color: '#fff',
    },
});