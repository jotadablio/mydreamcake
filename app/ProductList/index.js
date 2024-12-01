import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const cupcakes = [
  { id: '1', name: 'Cupcake Red Velvet Delícia', price: 'R$4,00', image: require('../../assets/cupcakes/cupcake1.png') },
  { id: '2', name: 'Cupcake Baunilha do Sonho', price: 'R$4,00', image: require('../../assets/cupcakes/cupcake2.png') },
  { id: '3', name: 'Cupcake White Surprise', price: 'R$6,00', image: require('../../assets/cupcakes/cupcake3.png') },
  { id: '4', name: 'Cupcake Meio Amargo (SL)', price: 'R$8,50', image: require('../../assets/cupcakes/cupcake4.png') },
];

export default function ProductList() {
  const navigation = useNavigation();
  
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack(); // Voltar para a tela anterior
    } else {
      navigation.navigate('Home'); // Redirecionar para a HomeScreen se não puder voltar
    }
  };
  
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
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent"/>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"< Voltar"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Lista de Cupcakes</Text>
      </View>

      <FlatList
        data={cupcakes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
        <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>Mais</Text>
      </TouchableOpacity>
    </View>
  );
}
