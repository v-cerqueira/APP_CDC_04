import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import NewsPortalScreen from './src/screens/NewsPortalScreen';
import screenStyles from './src/stylesheet/screenStyles';

export default function App() {
  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <StatusBar style="dark" />
      <NewsPortalScreen />
    </SafeAreaView>
  );
}
