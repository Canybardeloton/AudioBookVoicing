import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 30,
    },
    audioBooksList: {
      flex: 1,
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 50,
    },
    emptyText: {
      fontSize: 18,
      color: '#666',
      marginBottom: 20,
      textAlign: 'center',
    },
    addButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 8,
    },
    addButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
    audioBookItem: {
      backgroundColor: 'white',
      padding: 20,
      marginBottom: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    audioBookInfo: {
      flex: 1,
    },
    audioBookTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginBottom: 5,
    },
    audioBookAuthor: {
      fontSize: 14,
      color: '#666',
      marginBottom: 5,
    },
    audioBookDuration: {
      fontSize: 12,
      color: '#999',
    },
});