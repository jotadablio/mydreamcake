import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>PERFIL</Text>
      </View>

      {/* Ícone do Perfil */}
      <Image
        source={require('../../assets/icons/perfil.png')} // Substitua pelo ícone correto
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
      </View>

      {/* Versão */}
      <Text style={styles.version}>Versão 1.0.0</Text>
    </View>
  );
}
