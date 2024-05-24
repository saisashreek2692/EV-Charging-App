import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/HomeScreen";
import BookmarkScreen from '../Screen/BookmarkScreen';
import Profile from '../Screen/Profile';
import Feather from '@expo/vector-icons/Feather';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.GREEN,
          tabBarIcon: ({color, size}) => (
            <Feather name="search" size={size} color={color} />
          )
        }} />
        <Tab.Screen name='Bookmark' component={BookmarkScreen} options={{
          tabBarLabel: 'Bookmark',
          tabBarActiveTintColor: Colors.GREEN,
          tabBarIcon: ({color, size}) => (
            <Feather name="heart" size={size} color={color} />
          )
        }}  />
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: Colors.GREEN,
          tabBarIcon: ({color, size}) => (
            <Feather name="user" size={size} color={color} />
          )
        }}  />
    </Tab.Navigator>
  )
}