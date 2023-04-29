import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StatusBar 
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

function CustomHeader(props) {
  const statusBarHeight = StatusBar.currentHeight || 0;
  const toggleDrawer = () =>
    props.navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <SafeAreaView style={{marginTop: statusBarHeight}}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={toggleDrawer}
            style={styles.leftButton}
            testID="CustomHeader-toggleDrawer">
            <Text style={styles.buttonTxt}>MENU</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>QUILLA ECOMMERCE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222222',
    minHeight: 40,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  leftButton: {
    marginLeft: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 40,
  },
  buttonTxt: {
    color: '#ddd',
    fontWeight: 'bold',
  },
  headerTxt: {
    color: '#ddd',
  },
});

export default CustomHeader;
