import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const DrawerItem = ({ label, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
    <Icon name={icon} size={20} color="#333" />
    <Text style={styles.drawerLabel}>{label}</Text>
  </TouchableOpacity>
);

const DrawerMenu = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.drawerHeader}>
      <Text style={styles.drawerTitle}>Mi App</Text>
    </View>
    <View style={styles.drawerBody}>
      <DrawerItem label="Inicio" icon="home" onPress={() => navigation.navigate('LoginForm')} />
      <DrawerItem label="Opciones" icon="gear" onPress={() => navigation.navigate('Saludar')} />
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Submenu')}>
        <Icon name="caret-right" size={20} color="#333" />
        <Text style={styles.drawerLabel}>Submenú</Text>
      </TouchableOpacity>
      <View style={styles.drawerSeparator} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  drawerBody: {
    flex: 1,
    padding: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  drawerLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  drawerSeparator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default DrawerMenu;

