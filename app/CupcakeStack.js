import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './ProductList'; 
import ProductDetail from './ProductDetail/'; 

const Stack = createStackNavigator();

export default function CupcakeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="CupcakeDetails" component={ProductDetail} />
    </Stack.Navigator>
  );
}
