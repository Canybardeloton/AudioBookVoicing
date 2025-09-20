import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { AudioBook } from './src/types';

export default function App() {
  const [audioBooks, setAudioBooks] = useState<AudioBook[]>([]);

  useEffect(() => {
    // Ici vous pourrez charger les livres audio depuis votre backend
    // Pour l'instant, on initialise avec un tableau vide
    setAudioBooks([]);
  }, []);

  const handleSelectAudioBook = (audioBook: AudioBook) => {
    // Navigation vers l'écran de lecture
    console.log('Livre audio sélectionné:', audioBook.title);
  };

  return (
    <View style={styles.container}>
      <HomeScreen 
        audioBooks={audioBooks} 
        onSelectAudioBook={handleSelectAudioBook} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
