import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../styles/userSettingPagesStyles'

export default function Wallet() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Wallet</Text>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceText}>$0.00</Text>
                <TouchableOpacity style={styles.cashOutButton}>
                    <Text style={styles.cashText}>Cash Out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/wallet/paymentMethods")}>
                <Text style={styles.buttonText}>Payment Methods</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.optionContainer} onPress={() => router.push("/userSettingPages/wallet/help")}>
                <Text style={styles.buttonText}>Help</Text>
                <Icon name="angle-right" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    );
}

