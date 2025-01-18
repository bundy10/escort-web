import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import TabBar from '@/components/navigation/TabBar';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

    return (
        <Tabs
            tabBar={props=> <TabBar {...props} />}
        >
            <Tabs.Screen
                name="explore"
                options={{
                    title: "explore"
                }}
            />
            <Tabs.Screen
                name="bookings"
                options={{
                    title: "bookings"
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    title: "calendar"
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: "inbox"
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "profile"
                }}
            />
        </Tabs>
    )
}