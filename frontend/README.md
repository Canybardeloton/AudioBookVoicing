# AudioBookVoicing - Frontend

Application React Native pour la vocalisation de livres audio avec des voix personnalisées.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (v18 ou plus récent)
- npm ou yarn
- Expo CLI
- Un émulateur iOS/Android ou l'app Expo Go sur votre téléphone

### Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start
```

### Scripts disponibles

- `npm start` - Démarre le serveur Expo
- `npm run android` - Lance sur Android
- `npm run ios` - Lance sur iOS  
- `npm run web` - Lance sur le web

## 📱 Fonctionnalités

- 📚 Gestion des livres audio
- 🎵 Lecteur audio intégré
- 🎤 Sélection de voix personnalisées
- ⚙️ Paramètres de lecture (vitesse, pitch)
- 📱 Interface utilisateur moderne

## 🏗️ Structure du projet

```
src/
├── components/     # Composants réutilisables
├── screens/        # Écrans de l'application
├── services/       # Services (API, audio, etc.)
├── types/          # Types TypeScript
└── utils/          # Utilitaires
```

## 🔧 Technologies utilisées

- **React Native** - Framework mobile
- **Expo** - Plateforme de développement
- **TypeScript** - Typage statique
- **Expo AV** - Gestion audio/vidéo
- **React Navigation** - Navigation entre écrans

## 📦 Dépendances principales

- `expo-av` - Lecteur audio
- `expo-file-system` - Gestion des fichiers
- `expo-media-library` - Accès à la bibliothèque média
- `@react-navigation/native` - Navigation

## 🎯 Prochaines étapes

1. Intégration avec le backend
2. Système de gestion des voix
3. Interface de lecture avancée
4. Synchronisation cloud
5. Tests unitaires et d'intégration
