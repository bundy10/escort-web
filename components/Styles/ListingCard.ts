import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        borderRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '70%', // Set the width to 90%
        marginLeft: 'auto', // Center the card horizontally
        marginRight: 'auto', // Center the card horizontally
    },

    image: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
        fontWeight: '500',
    },
    description: {
        color: '#6e6969',
    },
});
