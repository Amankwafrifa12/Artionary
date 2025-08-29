# Artionary

Artionary is a student-friendly art dictionary app built with React Native and Expo. It helps users discover, learn, and explore visual art terms with clear definitions, etymology, and use cases.

## Features

- Responsive UI for mobile devices
- Search and browse art terms
- Student-friendly definitions and explanations
- Floating GenieAI button for future AI features
- Dynamic word count and About page
- No ads, clean and modern design
- Android and iOS support

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Amankwafrifa12/Artionary.git
   cd Artionary
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npx expo start
   ```

### Building for Production

- Use EAS Build for store-ready APK/IPA:
  ```
  eas build --profile production --platform android
  eas build --profile production --platform ios
  ```

## Project Structure

- `App.js` — Main app entry and navigation
- `components/` — All screen and UI components
- `assets/` — Icons, splash images, and other assets
- `words.json` — Art dictionary data
- `app.json` — Expo app configuration
- `eas.json` — EAS build configuration

## Configuration

Key settings from `app.json`:

```jsonc
{
  "expo": {
    "name": "Artionary",
    "slug": "Artionary",
    "version": "1.8.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "android": {
      "package": "com.genielab.Artionary",
      "versionCode": 9
    }
    // ...other config
  }
}
```

## Contributing

Pull requests and suggestions are welcome! Please open an issue for bugs or feature requests.

## License

MIT
