import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
 
  logo: {
    width: 300,
    height: 300,
    marginTop: 30,
    marginBottom: -125,
    alignItems: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
    alignItems: 'center',

  },
  button: {
    backgroundColor: '#000',
  paddingVertical: 20, // Altura proporcional
  width: '70%', // Largura responsiva
  maxWidth: 300, // Limita a largura máxima
  borderRadius: 12,
  marginVertical: 10,
  alignItems: 'center',
  justifyContent: 'center',  

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    width: '100%', // Define largura proporcional à tela
    maxWidth: 260, // Define um limite máximo de largura (opcional)
    textAlign: 'center',

  },
});
