import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles';

export default function AddFundsScreen() {
  const [selectedMethod, setSelectedMethod] = useState(''); // Estado para selecionar o método de pagamento

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>ADICIONAR FUNDOS</Text>
        <Image
          source={require('../../assets/icons/addFundsIcon.png')} // Ícone fictício
          style={styles.icon}
        />
      </View>

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
