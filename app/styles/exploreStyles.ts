import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',    
    },
    stepContainer: {
        marginBottom: 8,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderColor: 'white',
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
    searchIcon: {
        position: 'absolute',
        left: 10,
        zIndex: 1,
    },
    searchInput: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 30,
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
    scrollViewContent: {
        paddingTop: 200, // Adjust this value to ensure content is not hidden behind the header
        padding: 20,
    },
});

export default styles;