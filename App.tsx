import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Groups } from './src/screens/Groups';
import { Loading } from './src/components/Loading';



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (

    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
