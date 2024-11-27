import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PERFIL</Text>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Minhas informações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Histórico de pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Compartilhar</Text>
            </TouchableOpacity>

            <Text style={styles.version}>Versão 1.0.0</Text>
        </View>
    );
};

