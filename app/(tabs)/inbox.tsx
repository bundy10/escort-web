import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// This whole chat feature is just a skeleton with example chats. I havent hard coded chats because i want to use a database for that right?
interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    avatar: any; // i want to use URI obviously but for now local images
}

const chats: Chat[] = [
    {
        id: '1',
        name: 'Test Chat 1',
        lastMessage: 'Hello!',
        avatar: require('../images/exampleImage.jpg'), 
       },
    {
        id: '2',
        name: 'Test Chat 2',
        lastMessage: 'Hi!',
        avatar: require('../images/exampleImage2.jpg'), 
    },
    
];

export default function InboxScreen() {
    const router = useRouter();

    const handlePress = (chatId: string) => {
        router.push(`/conversation/${chatId}`);
    };

    const renderItem = ({ item }: { item: Chat }) => (
        <TouchableOpacity style={styles.chatItem} onPress={() => handlePress(item.id)}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Inbox</Text>
            </View>
            <FlatList
                data={chats}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    listContainer: {
        padding: 20,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatInfo: {
        flex: 1,
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        fontSize: 14,
        color: '#888',
    },
});