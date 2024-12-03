import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30,
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
  },
  title: {
    flex: 1,
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -30, // Ajuste para centralizar o título na barra
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quantityButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartIconContainer: {
    position: 'absolute',
    bottom: 60,
    right: 60,
    width: 40, // Ajuste para deixar menor
    height: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: 'center',
  },
  cartImage: {
    width: 60, // Ajuste proporcional ao tamanho do botão
    height: 60,
  },
  cartBadge: {
    position: 'absolute',
    top: 5, // Ajuste para alinhar corretamente
    right: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12, // Ajuste para caber no badge
    fontWeight: 'bold',
  },
});

export default styles;
