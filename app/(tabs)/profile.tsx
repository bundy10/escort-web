import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation();

const handlePress = (screenName: string) => {
    navigation.navigate(screenName as never);
};

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 60, paddingBottom: 60 }}>
            <Text style={[styles.heading, { fontSize: 28, fontWeight: 'bold', marginBottom: 40 }]}>Profile</Text>

            <TouchableOpacity style={styles.nameSection} onPress={() => handlePress('Profile')}>
            <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="user-circle" size={50} color="#000" />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.nameText, { fontSize: 24, paddingHorizontal: 10, marginBottom: 5 }]}>Name</Text>
                    <Text style={[styles.nameText, { fontWeight: 'normal', fontSize: 16, paddingHorizontal: 10 }]}>Show Profile</Text>
                </View>
            </View>
            </TouchableOpacity>
            <View style={[styles.separator, { marginTop: -10 }]} />


            <Text style={[styles.heading, { marginTop: 40 }]}>Settings</Text>
            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('PersonalInformation')}>
                <Text style={styles.buttonText}>Personal Information</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('LoginSecurity')}>
                <Text style={styles.buttonText}>Login & Security</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('PaymentsPayouts')}>
                <Text style={styles.buttonText}>Payments & Payouts</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('Accessibility')}>
                <Text style={styles.buttonText}>Accessibility</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('Notifications')}>
                <Text style={styles.buttonText}>Notifications</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('PrivacySharing')}>
                <Text style={styles.buttonText}>Privacy & Sharing</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <Text style={[styles.heading, { marginTop: 40 }]}>Support</Text>
            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('Feedback')}>
                <Text style={styles.buttonText}>Feedback</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <Text style={[styles.heading, { marginTop: 40 }]}>Legal</Text>
            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('TermsOfService')}>
                <Text style={styles.buttonText}>Terms of Service</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.optionContainer} onPress={() => handlePress('PrivacyPolicy')}>
                <Text style={styles.buttonText}>Privacy Policy</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.logoutButton} onPress={() => handlePress('Logout')}>
                <Text style={styles.logoutButtonText}>Log out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
