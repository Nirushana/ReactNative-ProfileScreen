import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Profile from './components/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from './components/EditProfile';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Icon.Button name="account-edit" size={25} backgroundColor="#fff" color="#000"/>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
