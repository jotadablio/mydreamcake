import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const { login, redirectAfterLogin, setRedirectAfterLogin } = useAuth();

  const handleLogin = () => {
    login();
    if (redirectAfterLogin) {
      navigation.replace(redirectAfterLogin); // Navega para a rota salva
      setRedirectAfterLogin(null); // Limpa o redirecionamento
    } else {
      navigation.navigate('Home'); // Volta para a Home caso não tenha redirecionamento
    }
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

