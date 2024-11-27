import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        // Simular login e redirecionar
        navigation.navigate('Home'); // Troque 'Home' pela tela desejada
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá! Para continuar, faça o seu login</Text>
            
            <TextInput 
                style={styles.input} 
                placeholder="E-mail" 
                keyboardType="email-address" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Senha" 
                secureTextEntry 
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
