import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AudioBook } from '../types';
import { styles } from '../utils/stylesheet';

interface HomeScreenProps {
  audioBooks: AudioBook[];
  onSelectAudioBook: (audioBook: AudioBook) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ audioBooks, onSelectAudioBook }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AudioBookVoicing</Text>
      <Text style={styles.subtitle}>Vos livres audio</Text>
      
      <ScrollView style={styles.audioBooksList}>
        {audioBooks.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Aucun livre audio trouvé
            </Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Ajouter un livre audio</Text>
            </TouchableOpacity>
          </View>
        ) : (
          audioBooks.map((audioBook) => (
            <TouchableOpacity
              key={audioBook.id}
              style={styles.audioBookItem}
              onPress={() => onSelectAudioBook(audioBook)}
            >
              <View style={styles.audioBookInfo}>
                <Text style={styles.audioBookTitle}>{audioBook.title}</Text>
                <Text style={styles.audioBookAuthor}>{audioBook.author}</Text>
                <Text style={styles.audioBookDuration}>
                  {Math.floor(audioBook.duration / 60000)} min
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};


export default HomeScreen;
