import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'

export default function ProfileScreen() {
  const { logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    logout(); 
  navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  });
  };


  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.backButton}>
            <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>PERFIL</Text>
      </View>
      {/* Ícone do Perfil */}
      <Image
        source={require('../../assets/icons/perfil.png')} 
        style={styles.profileIcon}
      />
      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Minhas informações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Histórico de pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compartilhar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* Versão */}
      <Text style={styles.version}>Versão 1.0.0</Text>
    </View>
  );
}
