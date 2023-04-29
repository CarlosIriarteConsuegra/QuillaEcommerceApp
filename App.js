import { View, Text, StyleSheet } from "react-native";
import Drawer from "react-native-drawer";
import DrawerMenu from "./src/componentes/DrawerMenu";
const App = ({ navigation }) => {
  return (
    <Drawer
      type="overlay"
      content={<DrawerMenu navigation={navigation} />}
      tapToClose={true}
      openDrawerOffset={0.2}
      styles={styles.drawer}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a mi App</Text>
        <Text style={styles.subtitle}>
          Desliza hacia la derecha para abrir el menú
        </Text>
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  drawer: {
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
});

export default App;
