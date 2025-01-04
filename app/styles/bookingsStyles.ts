import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    tabContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    tab: {
        marginRight: 20,
        fontSize: 16,
        paddingVertical: 5,
    },
    activeTab: {
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    inactiveTab: {
        color: '#888',
    },
    content: {
        padding: 10,
    },
    bookingCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 1,
    },
    image: {
        width: 100,
        height: 100,
    },
    details: {
        flex: 1,
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dates: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        color: '#555',
    },
    status: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    rebookButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    rebookButtonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default styles;