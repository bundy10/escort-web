import  { View, Text, Image } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import {white} from "colorette";


export default function WelcomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000000', fontSize: 24, fontWeight: 'bold' }}>Welcome to the app!</Text>
                <View>
                    <Image source={require('../../assets/images/logo.png')} style={{ width: 100, height: 120 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}