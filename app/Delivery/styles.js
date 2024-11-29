import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingTop: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
    },
    list: {
      paddingBottom: 20,
    },
    storeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      marginVertical: 8,
      padding: 10,
      elevation: 3,
    },
    storeImage: {
      width: 70,
      height: 70,
      borderRadius: 10,
    },
    storeDetails: {
      flex: 1,
      marginLeft: 10,
    },
    storeName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    storeDistance: {
      fontSize: 14,
      color: '#888',
    },
    mapButton: {
      padding: 10,
    },
    mapIcon: {
      width: 24,
      height: 24,
    },
  });

  export default styles;