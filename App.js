import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import AllAppsScreen from './src/screens/AllAppsScreen';
import GoldScreen from './src/screens/GoldScreen';
import GameScreen from './src/screens/GameScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import {
  IconHome,
  IconAllApp,
  IconGold,
  IconGame,
  IconProfile,
} from './src/components/icons/AppIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        initialRouteName="AllApps"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#1D74E7',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E5E5EA',
            height: 60,
            paddingBottom: 8,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              return <IconHome active={focused} size={24} />;
            } else if (route.name === 'AllApps') {
              return <IconAllApp active={focused} size={24} />;
            } else if (route.name === 'Gold') {
              return <IconGold active={focused} size={24} />;
            } else if (route.name === 'Game') {
              return <IconGame active={focused} size={24} />;
            } else if (route.name === 'Profile') {
              return <IconProfile active={focused} size={24} />;
            }
            return null;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="AllApps"
          component={AllAppsScreen}
          options={{ tabBarLabel: 'All Apps' }}
        />
        <Tab.Screen
          name="Gold"
          component={GoldScreen}
          options={{ tabBarLabel: 'Gold' }}
        />
        <Tab.Screen
          name="Game"
          component={GameScreen}
          options={{ tabBarLabel: 'Game' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
