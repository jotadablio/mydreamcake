import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';


const stores = [
  {
    id: '1',
    name: 'DreamCake Av. Esquina',
    distance: '1,2 Km',
    image: require('../../assets/images/store1.png'),
  },
  {
    id: '2',
    name: 'DreamCake Centro',
    distance: '3,3 Km',
    image: require('../../assets/images/store2.png'),
  },
  {
    id: '3',
    name: 'DreamCake Loja 9',
    distance: '5,1 Km',
    image: require('../../assets/images/store3.png'),
  },
  {
    id: '4',
    name: 'DreamCake Anexo Ed. Fício',
    distance: '8,5 Km',
    image: require('../../assets/images/store4.png'),
  },
];

export default function DeliveryScreen() {
  const renderStore = ({ item }) => (
    <View style={styles.storeContainer}>
      <Image source={item.image} style={styles.storeImage} />
      <View style={styles.storeDetails}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeDistance}>{item.distance}</Text>
      </View>
      <TouchableOpacity style={styles.mapButton}>
        <Image
          source={require('../../assets/icons/map.png')} // Ícone do Google Maps
          style={styles.mapIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOJAS PRÓXIMAS</Text>
      <FlatList
        data={stores}
        renderItem={renderStore}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

