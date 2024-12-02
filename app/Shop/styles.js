
import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight,
  },
  backButton: {
    marginRight: 100,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8c1c1',
    padding: 12,
    borderRadius: 8,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});