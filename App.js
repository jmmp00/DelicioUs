import React from "react";
// import things related to React Navigation
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import Login from "./navigation/screens/Login";
import Register from "./navigation/screens/Register";
import HomeScreen from "./navigation/screens/HomeScreen";
import OfferScreen from "./navigation/screens/OfferScreen";
import InviteScreen from "./navigation/screens/InviteScreen";
import Profile from "./navigation/screens/Profile";

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
        <MyStack.Screen name="HomeScreen" component={HomeScreen} />
        <MyStack.Screen name="OfferScreen" component={OfferScreen} />
        <MyStack.Screen name="InviteScreen" component={InviteScreen} />
        <MyStack.Screen name="Profile" component={Profile} />

      </MyStack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;