import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import AddFundsScreen from '../addFunds/index';
import ProfileScreen from '../Profile';
import styles from './styles'; // Importando os estilos
import { useAuth } from '../context/AuthContext';
import ShopScreen from '../Shop';

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  const logoPosition = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const { isLoggedIn, setRedirectAfterLogin } = useAuth(); // Estado de login

  useEffect(() => {
    Animated.timing(logoPosition, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
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
            <Animated.View style={{ transform: [{ translateY: logoPosition }] }}>
              <Image
                source={require('../../assets/images/logo.jpg')}
                style={styles.logo}
              />
            </Animated.View>
            <Animated.View
              style={[styles.buttonsContainer, { opacity: buttonOpacity }]}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProductList')}
              >
                <Text style={styles.buttonText}>CONSUMIR NA LOJA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (isLoggedIn) {
                    navigation.navigate('Delivery');
                  } else {
                    setRedirectAfterLogin('Delivery');
                    navigation.navigate('Login');
                  }
                }}
              >
                <Text style={styles.buttonText}>DELIVERY</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </Tab.Screen>

      {/* Tela Pedidos */}
      <Tab.Screen
        name="Orders"
        listeners={{
          tabPress: (e) => {
            if (!isLoggedIn) {
              e.preventDefault();
              setRedirectAfterLogin('Shop'); 
              navigation.navigate('Login'); // Redireciona para login
            }
          },
        }}
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
      >
        {() =>
          isLoggedIn ? (
            <ShopScreen/>
          ) : null
        }
      </Tab.Screen>

      {/* Tela Adicionar Saldo */}
      <Tab.Screen
        name="AddFunds"
        component={AddFundsScreen}
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
        listeners={{
          tabPress: (e) => {
            if (!isLoggedIn) {
              e.preventDefault();
              setRedirectAfterLogin('Profile'); 
              navigation.navigate('Login');
            }
          },
        }}
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
      >
      </Tab.Screen>
    </Tab.Navigator>
  );
}
