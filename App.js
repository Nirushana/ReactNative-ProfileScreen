import React from 'react';
import { StyleSheet, View } from 'react-native';
import Profile from './components/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from './components/EditProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation, createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function ProfileScreen({navigation}) {
return(
  <View style={styles.container}>
    <View style={styles.IconEdit}>
      <Icon.Button name="account-edit" size={35} backgroundColor="transparent" color="#000" onPress={() => navigation.navigate('Edit Profile')} /> 
    </View>   
    <Profile />
  </View>
);
}

function EditProfileScreen() {
  return(
    <View style={styles.container}>
      <EditProfile />
    </View>
  );
}

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="">
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IconEdit: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  
  },
});
