// Types pour l'application AudioBookVoicing

export interface AudioBook {
  id: string;
  title: string;
  author: string;
  duration: number;
  filePath: string;
  coverImage?: string;
  createdAt: Date;
}

export interface VoiceProfile {
  id: string;
  name: string;
  language: string;
  gender: 'male' | 'female';
  speed: number;
  pitch: number;
  voiceId: string;
}

export interface AudioSettings {
  volume: number;
  playbackSpeed: number;
  voiceProfile: VoiceProfile;
}

export interface PlaybackState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isLoading: boolean;
}
