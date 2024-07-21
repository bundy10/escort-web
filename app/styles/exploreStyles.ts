import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',    
    },
    stepContainer: {
        marginBottom: 8,
    },
    header: {
        height: 100,
        backgroundColor: '#A1CEDC',
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    searchInput: {
        padding: 15, 
        backgroundColor: 'white', 
        borderRadius: 20, 
        borderWidth: 1, // border
        borderColor: '#ddd', // Optional: Sets the border color
        elevation: 3, // Elevation for Android 
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.1, // Shadow opacity for iOS
        shadowRadius: 2, // Shadow radius for iOS
        fontSize: 16, 
        margin: 40,
        marginTop: 100,
    },
    searchButton: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 30,
        marginTop: 50,
        paddingLeft: 10,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: 'white', 
        elevation: 4, // Elevation for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.23, // Shadow opacity for iOS
        shadowRadius: 2.62, // Shadow radius for iOS
        borderRadius: 25, 
        
    },
    searchButtonText: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    closeSearch: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        marginTop: 22, 
        position: 'relative',
        margin: 0,
        height: '100%',
    },
    cardImage: {
        width: '100%',
        height: '40%',
        resizeMode: 'cover',
    },
    floatBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // for Android
        borderTopWidth: 1, // for the top border
        borderTopColor: '#E0E0E0', // Light grey color for the separator
    },
});
