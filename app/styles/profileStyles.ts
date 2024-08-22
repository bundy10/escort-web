import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    nameSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    nameText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 20,
    },
    separator: {
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        marginVertical: 8,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    logoutButton: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 10,
        marginTop: 30,
    },
    logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
