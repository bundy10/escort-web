import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '100%', // Adjusted width to 90%
        marginLeft: 'auto', // Center the card horizontally
        marginRight: 'auto', // Center the card horizontally
    },
    image: {
        width: '100%',
        height: 300, // Increased height to 300
        borderRadius: 15, // Apply border radius to the image
        resizeMode: 'cover', // Ensure the image covers the entire area
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 10, // Increased margin for better spacing
        fontSize: 18, // Increased font size
        fontWeight: 'bold', // Made the title bold
    },
    description: {
        color: '#6e6969',
        fontSize: 14, // Increased font size for better readability
    },
});