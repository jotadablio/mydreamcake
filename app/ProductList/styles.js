import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  list: { alignItems: 'center' },
  card: { margin: 10, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 10 },
  name: { fontSize: 14, fontWeight: 'bold', marginVertical: 5, textAlign: 'center' },
  price: { fontSize: 12, color: '#555' },
  button: { backgroundColor: '#000', borderRadius: 20, padding: 5, marginTop: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default styles;