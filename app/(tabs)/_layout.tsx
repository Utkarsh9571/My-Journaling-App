import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Add Entry',
          tabBarIcon: ({ color }) => <FontAwesome name="plus-square" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="entries"
        options={{
          title: 'View Entries',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
