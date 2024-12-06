import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function AddFundsScreen() {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Text style={styles.backButtonText}>{"< Voltar"}</Text>
  </TouchableOpacity>
        <Text style={styles.title}>ADICIONAR FUNDOS</Text>
      </View>
      <Image
          source={require('../../assets/icons/addFundsIcon.png')} 
          style={styles.icon}
        />
      {/* Escolha do meio de pagamento */}
      <Text style={styles.subtitle}>Escolha o meio de pagamento</Text>

      {/* Botão Cartão de Crédito */}
      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedMethod === 'Cartão' && styles.selectedOption,
        ]}
        onPress={() => setSelectedMethod('Cartão')}
      >
        <Text style={styles.paymentText}>Cartão de crédito</Text>
      </TouchableOpacity>

      {/* Botão Boleto */}
      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedMethod === 'Boleto' && styles.selectedOption,
        ]}
        onPress={() => setSelectedMethod('Boleto')}
      >
        <Text style={styles.paymentText}>Boleto</Text>
      </TouchableOpacity>

      {/* Botão PIX */}
      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedMethod === 'PIX' && styles.selectedOption,
        ]}
        onPress={() => setSelectedMethod('PIX')}
      >
        <Text style={styles.paymentText}>PIX</Text>
      </TouchableOpacity>

      {/* Área de PIX (visível apenas se o método PIX for selecionado) */}
      {selectedMethod === 'PIX' && (
        <View style={styles.pixContainer}>
          <Image
            source={require('../../assets/icons/qrCodePlaceholder.png')} // QR Code fictício
            style={styles.qrCode}
          />
          <Text style={styles.pixCode}>
            12312ABSHDA134B92AKDASKD293YAKLPF {/* Código PIX fictício */}
          </Text>
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Copiar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
