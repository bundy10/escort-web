import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from '../../styles/userSettingPagesStyles'

export default function PaymentMethods() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Payment Methods</Text>
            <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.buttonText}>Add Credit or Debit Card</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.buttonText}>Add Bank Account</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.buttonText}>Add PayPal</Text>
            </TouchableOpacity>
        </View>
    );
}
