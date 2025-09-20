import { Audio } from 'expo-av';
import { AudioBook, PlaybackState } from '../types';

class AudioService {
  private sound: Audio.Sound | null = null;
  private playbackState: PlaybackState = {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isLoading: false,
  };

  async loadAudioBook(audioBook: AudioBook): Promise<void> {
    try {
      this.playbackState.isLoading = true;
      
      if (this.sound) {
        await this.sound.unloadAsync();
      }

      const { sound } = await Audio.Sound.createAsync(
        { uri: audioBook.filePath },
        { shouldPlay: false }
      );

      this.sound = sound;
      this.playbackState.duration = audioBook.duration;
      this.playbackState.isLoading = false;
    } catch (error) {
      console.error('Erreur lors du chargement du livre audio:', error);
      this.playbackState.isLoading = false;
      throw error;
    }
  }

  async play(): Promise<void> {
    if (this.sound) {
      await this.sound.playAsync();
      this.playbackState.isPlaying = true;
    }
  }

  async pause(): Promise<void> {
    if (this.sound) {
      await this.sound.pauseAsync();
      this.playbackState.isPlaying = false;
    }
  }

  async stop(): Promise<void> {
    if (this.sound) {
      await this.sound.stopAsync();
      this.playbackState.isPlaying = false;
      this.playbackState.currentTime = 0;
    }
  }

  async seekTo(positionMillis: number): Promise<void> {
    if (this.sound) {
      await this.sound.setPositionAsync(positionMillis);
      this.playbackState.currentTime = positionMillis;
    }
  }

  getPlaybackState(): PlaybackState {
    return { ...this.playbackState };
  }

  async cleanup(): Promise<void> {
    if (this.sound) {
      await this.sound.unloadAsync();
      this.sound = null;
    }
  }
}

export default new AudioService();
