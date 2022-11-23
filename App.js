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
import Map from "./navigation/screens/Map";
import AddPost from "./navigation/screens/AddPost";
import Preferences from "./navigation/screens/Preferences";
import Followers from "./navigation/screens/Followers";
import AddMedia from "./navigation/screens/AddMedia";

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
        <MyStack.Screen name="Preferences" component={Preferences} />
        <MyStack.Screen name="Followers" component={Followers} />
        <MyStack.Screen name="Map" component={Map} />
        <MyStack.Screen name="AddPost" component={AddPost} />
          <MyStack.Screen name="AddMedia" component={AddMedia} />

      </MyStack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;