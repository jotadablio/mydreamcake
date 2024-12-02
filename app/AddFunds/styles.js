import { StyleSheet , StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  header: {
    width: '100%',
    backgroundColor: '#000', 
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 20, 
    paddingBottom: 10,
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 5,
    
  },
  title: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 30,
    textAlign: 'row', 
    flex: 1,
  },
  icon: {
    marginVertical: 20, 
  width: 80,
  height: 80,
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
  backButton: {
    marginRight: 40,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
