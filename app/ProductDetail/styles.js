import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  topbar: {
    width: '100%',
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cartIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: 50,
    height: 50,
  },
  cartBadge: {
    position: 'absolute',
    top: 5,
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
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
