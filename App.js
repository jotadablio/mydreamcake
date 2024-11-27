import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';

// Importar telas
import LoadingScreen from './app/LoadingScreen'; // Tela de carregamento
import HomeScreen from './app/HomeScreen/index'; // Tela Home
import ProductList from './app/ProductList/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela de Loading */}
        <Stack.Screen name="Loading" component={LoadingScreen} />
        {/* Tela Home */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Tela de Produtos */}
        <Stack.Screen name="ProductList" component={ProductList} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
