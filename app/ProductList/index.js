import React, { useEffect, useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const cupcakes = [
  { id: '1', name: 'Cupcake Red Velvet Delícia', price: 'R$8,00', image: require('../../assets/cupcakes/cupcake4.png') },
  { id: '2', name: 'Cupcake Baunilha do Sonho', price: 'R$8,00', image: require('../../assets/cupcakes/cupcake2.png') },
  { id: '3', name: 'Cupcake White Surprise', price: 'R$10,00', image: require('../../assets/cupcakes/cupcake3.png') },
  { id: '4', name: 'Cupcake Meio Amargo (SL)', price: 'R$12,00', image: require('../../assets/cupcakes/cupcake1.png') },
];

export default function ProductList() {
  const [cupcakes, setCupcakes] = useState([]); // Estado para os cupcakes
  const [loading, setLoading] = useState(true); // Estado para o carregamento
  const navigation = useNavigation();
  
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack(); 
    } else {
      navigation.navigate('Home'); 
    }
  };

  useEffect(() => {
    const fetchCupcakes = async () => {
      try {
        const response = await api.get('/cupcakes'); //chama backend
        setCupcakes(response.data); // Define os cupcakes recebidos no estado
      } catch (error) {
        console.error('Erro ao buscar cupcakes:', error);
      } finally {
        setLoading(false); // Oculta carregamento
      }
    };

    fetchCupcakes();
  }, []);
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', { cupcake: item })}
    >
      <Image source={{ uri: `http://localhost:3000${item.image_url}` }} style={styles.image} /> 
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{`R$${parseFloat(item.price).toFixed(2)}`}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando cupcakes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.topbar}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"< Voltar"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Lista de Cupcakes</Text>
      </View>

      <FlatList
        data={cupcakes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>Mais</Text>
      </TouchableOpacity>
    </View>
  );
}