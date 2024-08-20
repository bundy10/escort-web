import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        initialRouteName="explore"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'flame' : 'flame-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'wine' : 'wine-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
            title: 'Calendar',
            tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
            ),
        }}
      />
       <Tabs.Screen
            name="inbox"
            options={{
                title: 'Inbox',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'mail' : 'mail-outline'} color={color} />
                ),
            }}
       />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
