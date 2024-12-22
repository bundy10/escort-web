import {View, Text, TouchableOpacity, ImageBackground, Pressable} from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {NavigationProp, useNavigation} from "@react-navigation/core";
import { RootStackParamList } from '@/types/types';



export default function WelcomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <ImageBackground source={require('../../assets/images/backgroundImage.png')} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1}}>
                <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 16 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    </View>
                    <View style={{ marginTop: 'auto', marginBottom: 50 }}>
                        <Pressable style={{ paddingVertical: 12, backgroundColor: '#FACC15', marginHorizontal: 70, borderRadius: 10, marginBottom: 9 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Sign Up</Text>
                        </Pressable>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontWeight: '600', marginRight: 8 }}>
                                already have an account?
                            </Text>
                            <Pressable onPress={()=> navigation.navigate('auth/loginPage')}>
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