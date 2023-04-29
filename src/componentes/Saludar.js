import { Text, View } from "react-native";

export default function Saludar(props) {
  return (
    <View>
      <View>
        <Text onPress={() =>props.navigation.navigate('Login')}>Ir al login</Text>
        <Text>¿Olvidaste tu contraseña?</Text>
      </View>
    </View>
  );
}
