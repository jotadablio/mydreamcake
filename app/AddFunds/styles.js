import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  paymentOption: {
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedOption: {
    borderColor: '#000',
    backgroundColor: '#f0f0f0',
  },
  paymentText: {
    fontSize: 16,
  },
  pixContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  qrCode: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  pixCode: {
    fontSize: 14,
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  copyButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
