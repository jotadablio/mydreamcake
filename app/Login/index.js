import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Image } from 'react-native';
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

      {/* Campos de entrada */}
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />

      {/* Opções */}
      <View style={styles.options}>
        <View style={styles.option}>
          <Switch value={false} />
          <Text style={styles.optionText}>Continuar logado</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.optionText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Login social */}
      <Text style={styles.orText}>ou entre com:</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/icons/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/icons/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* Registro */}
      <TouchableOpacity>
        <Text style={styles.registerText}>Ainda não possui cadastro?</Text>
      </TouchableOpacity>
    </View>
  );
}
