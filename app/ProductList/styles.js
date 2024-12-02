import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'android' ? 80 : 70, 
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? 25 : 45,
  },
  backButton: {
    marginRight: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'row',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 70,
  },
  list: {
    flexGrow: 1,
    paddingHorizontal: 5,
    paddingBottom: 80, 
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#555',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 5,
    marginTop:5,
    width: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  moreButton: {
    marginTop: 20, 
    marginBottom: 80, 
    alignSelf: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
