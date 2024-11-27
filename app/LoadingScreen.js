import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    // Navega para a tela "Home" após 2 segundos
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
      <Text style={styles.loadingDots}>...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  loadingDots: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
