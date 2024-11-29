import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';

export default function ShopScreen() {
  const navigation = useNavigation();

  const handleGoToProducts = () => {
    navigation.replace('ProductList'); // Navega para a tela de lista de produtos
  };

  return (
    <View style={styles.container}>
      {/* Mensagem quando não há itens */}
      <Text style={styles.message}>Você ainda não fez nenhum pedido.</Text>

      {/* Botão de navegação para produtos */}
      <TouchableOpacity style={styles.button} onPress={handleGoToProducts}>
        <Image
          source={require('../../assets/icons/cupluscake.png')} // Ícone do cupcake
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Explorar Produtos</Text>
      </TouchableOpacity>
    </View>
  );
}
