import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import styles from './styles';

export default function LoginScreen({ navigation }) {
    const { setIsLoggedIn } = useAuth(); // Função para atualizar o estado de login
  
    const handleLogin = () => {
      setIsLoggedIn(true); // Define como logado
      navigation.replace('Profile'); // Redireciona para o perfil
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Olá! Para continuar, faça o seu login</Text>
        <TextInput placeholder="E-mail" style={styles.input} />
        <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

