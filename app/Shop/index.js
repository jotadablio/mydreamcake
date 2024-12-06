import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';

export default function ShopScreen() {
  const navigation = useNavigation();

  const handleGoToProducts = () => {
    navigation.replace('ProductList'); // Navega para a tela de lista de produtos
  };

  return (
    <View style={styles.container}>
    <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
    <View style={styles.topbar}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>{"< Voltar"}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>PEDIDOS</Text>
    </View>

    {/* Conteúdo Principal */}
    <View style={styles.content}>
      <Text style={styles.message}>Você ainda não fez nenhum pedido.</Text>
      {/* Botão de navegação para produtos */}
      <TouchableOpacity style={styles.button} onPress={handleGoToProducts}>
        <Image
          source={require('../../assets/icons/cupluscake.png')} 
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Explorar Produtos</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}