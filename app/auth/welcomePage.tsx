import { View, Text, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

export default function WelcomeScreen() {
    return (
        <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1}}>
                <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 16 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    </View>
                    <View style={{ marginTop: 'auto', marginBottom: 50 }}>
                        <Pressable
                            style={{ paddingVertical: 12, backgroundColor: '#FACC15', marginHorizontal: 70, borderRadius: 10, marginBottom: 9 }}
                            onPress={() => router.push('/auth/signUpPage')}
                        >
                            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Sign Up</Text>
                        </Pressable>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontWeight: '600', marginRight: 8 }}>
                                already have an account?
                            </Text>
                            <Pressable onPress={() => router.push('/auth/loginPage')}>
                                <Text style={{ color: '#000000', fontWeight: '600' }}>
                                    Log in
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}