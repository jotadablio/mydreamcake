import { StyleSheet , StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingTop: StatusBar.currentHeight,
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
    paddingLeft: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
    paddingLeft: 100,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  version: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
  },
  logoutButton: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
