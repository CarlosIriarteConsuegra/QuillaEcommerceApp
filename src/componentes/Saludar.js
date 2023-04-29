import { Text } from 'react-native';

export default function Saludar(props) {
    let { user="Anonimo" } = props;
    return (
        <Text>Bienvenido {user}</Text>
    );
}