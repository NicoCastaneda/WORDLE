
import { StyleSheet, Text, View } from 'react-native';
import { GameProvider } from './src/context/gameContext';
import GameScreen from './src/views/GameScreen';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <GameProvider>
      <AppNavigator>
        <GameScreen />
      </AppNavigator>
    </GameProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
