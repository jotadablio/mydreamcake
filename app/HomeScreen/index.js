import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import AddFundsScreen from '../addFunds/index';
import styles from './styles'; // Importando os estilos

// Telas para a barra inferior
function OrdersScreen() {
  return (
    <View style={styles.screen}>
      <Text>Pedidos</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Perfil</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  const logoPosition = useRef(new Animated.Value(0)).current; // Posição inicial do logotipo
  const buttonOpacity = useRef(new Animated.Value(0)).current; // Opacidade inicial dos botões

  useEffect(() => {
    // Animação para mover o logotipo para cima
    Animated.timing(logoPosition, {
      toValue: -100, // Subir o logotipo em 100 unidades
      duration: 1000, // Duração de 1 segundo
      useNativeDriver: true,
    }).start();

    // Animação para exibir os botões (opacidade)
    Animated.timing(buttonOpacity, {
      toValue: 1, // Opacidade final
      duration: 1000, // Duração de 1 segundo
      delay: 500, // Atraso para começar após o logotipo
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        headerShown: false, // Remove o cabeçalho padrão
      }}
    >
      {/* Tela Inicial */}
      <Tab.Screen
        name="StartUp"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#000' : '#888'}
            />
          ),
        }}
      >
        {() => (
          <View style={styles.container}>
            {/* Logotipo animado */}
            <Animated.View style={{ transform: [{ translateY: logoPosition }] }}>
              <Image
                source={require('../../assets/images/logo.jpg')}
                style={styles.logo}
              />
            </Animated.View>

            {/* Botões animados */}
            <Animated.View
              style={[styles.buttonsContainer, { opacity: buttonOpacity }]}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProductList')} // Navega para a tela de cupcakes
              >
                <Text style={styles.buttonText}>CONSUMIR NA LOJA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>DELIVERY</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </Tab.Screen>

      {/* Tela Pedidos */}
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'list' : 'list-outline'}
              size={24}
              color={focused ? '#000' : '#888'}
            />
          ),
        }}
      />

      <Tab.Screen
          name="AddFunds"
          component={AddFundsScreen} // Referência à tela de Adicionar Saldo
          options={{
             tabBarLabel: 'Saldo',
            tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? 'wallet' : 'wallet-outline'}
        size={24}
        color={focused ? '#000' : '#888'}
      />
    ),
  }}
      />

      {/* Tela Perfil */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? '#000' : '#888'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
