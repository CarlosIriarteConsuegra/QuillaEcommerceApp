import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/componentes/LoginForm';
import Saludar from './src/componentes/Saludar';
export default function App() {
  return (
    <View style={styles.container}>
      <Saludar />
      <LoginForm />
    </View>
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
