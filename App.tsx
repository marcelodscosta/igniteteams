import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { Groups } from './src/screens/Groups';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Groups />
    </ThemeProvider>
  );
}


