import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { styles } from '../styles/profileStyles';

export default function ProfileScreen() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 60, paddingBottom: 60 }}>
            <Text style={[styles.heading, { fontSize: 28, fontWeight: 'bold', marginBottom: 40 }]}>Profile</Text>

            <TouchableOpacity style={styles.nameSection} onPress={() => router.push("")}>
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
            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/personalInformation")}>
                <Text style={styles.buttonText}>Personal Information</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/loginSecurity")}>
                <Text style={styles.buttonText}>Login & Security</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />


            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/wallet/wallet")}>
                <Text style={styles.buttonText}>Wallet</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/accessibility")}>
                <Text style={styles.buttonText}>Accessibility</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/notifications")}>
                <Text style={styles.buttonText}>Notifications</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/privacySharing")}>
                <Text style={styles.buttonText}>Privacy & Sharing</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <Text style={[styles.heading, { marginTop: 40 }]}>Support</Text>
            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("")}>
                <Text style={styles.buttonText}>Feedback</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <Text style={[styles.heading, { marginTop: 40 }]}>Legal</Text>
            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/tos")}>
                <Text style={styles.buttonText}>Terms of Service</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("")}>
                <Text style={styles.buttonText}>Privacy Policy</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity style={styles.logoutButton} onPress={() => router.push("")}>
                <Text style={styles.logoutButtonText}>Log out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

