import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from '../../styles/userSettingPagesStyles'

export default function Help() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Help</Text>
            <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.buttonText}>FAQ</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.buttonText}>Contact Support</Text>
            </TouchableOpacity>
        </View>
    );
}
