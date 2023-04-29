import { TextInput, Pressable, Text, View, StyleSheet } from 'react-native';

export default function LoginForm(props) {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.bienvenido}>BIENVENIDO</Text>
      <Text>Ingresa estos datos para iniciar</Text>
      <TextInput style={styles.input} placeholder='Correo Electronico' />
      <TextInput style={styles.input} placeholder='Contraseña' />
      <Text style={styles.olvidasteContras} onPress={() =>props.navigation.navigate('Saludar')}>¿Olvidaste tu contraseña?</Text>
      <View style={styles.botones}>
        <Pressable style={styles.comenzar} onPress={() => console.log("COMENZAR")}>
          <Text style={styles.textoComenzar} >COMENZAR</Text>
        </Pressable>

        <Pressable style={styles.registrarse} onPress={() => console.log("REGISTRARSE")}>
          <Text style={styles.textoRegistrarse} >REGISTRARSE</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    marginHorizontal: "auto"
  },
  bienvenido: {
    color: '#4c9c6a',
    fontSize: 30,
    marginBottom: 10
  },
  input: {
    marginTop: 15,
    paddingLeft: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  olvidasteContras: {
    marginTop: 10
  },
  botones: {
    marginTop: 25,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  comenzar: {
    backgroundColor: "#4c9c6a",
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: 125,
    height: 40
  },
  textoComenzar: {
    color:"#fff"
  },
  registrarse: {
    backgroundColor: "#fff",
    borderColor: "#4c9c6a",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: 125,
    height: 40
  },
  textoRegistrarse: {
    color:"#4c9c6a"
  },
});