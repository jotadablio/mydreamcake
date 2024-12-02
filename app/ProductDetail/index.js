import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function ProductDetail() {
  const route = useRoute(); // Obtém os parâmetros passados pela navegação
  const navigation = useNavigation();
  const { cupcake } = route.params; // Cupcake selecionado
  const [quantity, setQuantity] = useState(1); // Estado para quantidade

  // Funções para ajustar a quantidade
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Lógica futura: adicionar o cupcake ao carrinho
    console.log(`Adicionado ${quantity}x ${cupcake.name} ao carrinho`);
    alert(`Adicionado ${quantity}x ${cupcake.name} ao carrinho!`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"< Voltar"} </Text>
      </TouchableOpacity>
      <Image source={cupcake.image} style={styles.image} />
      <Text style={styles.name}>{cupcake.name}</Text>
      <Text style={styles.description}>Ingredientes e informações fictícias do cupcake.</Text>
      <Text style={styles.price}>{cupcake.price}</Text>

      {/* Controles de quantidade */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de adicionar ao carrinho */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonText}>
          Adicionar R${(parseFloat(cupcake.price.replace('R$', '')) * quantity).toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}