import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const cupcakes = [
  { id: '1', name: 'Cupcake Red Velvet Delícia', price: 'R$4,00', image: require('../../assets/cupcakes/cupcake1.png') },
  { id: '2', name: 'Cupcake Baunilha do Sonho', price: 'R$4,00', image: require('../../assets/cupcakes/cupcake2.png') },
  { id: '3', name: 'Cupcake White Surprise', price: 'R$6,00', image: require('../../assets/cupcakes/cupcake3.png') },
  { id: '4', name: 'Cupcake Meio Amargo (SL)', price: 'R$8,50', image: require('../../assets/cupcakes/cupcake4.png') },
];

export default function ProductList() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Cupcakes</Text>
      <FlatList
        data={cupcakes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
