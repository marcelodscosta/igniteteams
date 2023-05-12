import { ThemeProvider } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { Groups } from './src/screens/Groups';



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });



  return (

    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
