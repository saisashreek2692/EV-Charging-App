import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/HomeScreen";
import BookmarkScreen from '../Screen/BookmarkScreen';
import Profile from '../Screen/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Search'
        }} />
        <Tab.Screen name='Bookmark' component={BookmarkScreen} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}