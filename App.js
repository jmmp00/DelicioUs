import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
// import things related to React Navigation
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

// import screens
import Login from "./screens/Login";
import Register from "./screens/Register";
import Screen2 from "./screens/Screen2";

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator screenOptions={{
    headerShown: false
  }}>
        <MyStack.Screen name="Login" component={Login} />
        <MyStack.Screen name="Register" component={Register} />
        <MyStack.Screen name="Screen2" component={Screen2} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;