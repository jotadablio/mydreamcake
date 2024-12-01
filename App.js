import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { AuthProvider, useAuth } from './app/context/AuthContext';

// Importar telas
import LoadingScreen from './app/LoadingScreen'; // Tela de carregamento
import HomeScreen from './app/HomeScreen/index'; // Tela Home
import ProductList from './app/ProductList/index';
import LoginScreen from './app/Login/index';
import ProfileScreen from './app/Profile/index';
import DeliveryScreen from './app/Delivery/index';
import ShopScreen from './app/Shop/index';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela de Loading */}
        <Stack.Screen name="Loading" component={LoadingScreen} />
        {/* Tela Home */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Tela de Produtos */}
        <Stack.Screen name="ProductList" component={ProductList} />   
        {/* Tela de Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/*Perfil*/}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/*Delivery*/}
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        {/*Shop*/}
        <Stack.Screen name="Shop" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

