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
import Profile2 from "./navigation/screens/Profile2";
import Map from "./navigation/screens/Map";
import AddPost from "./navigation/screens/AddPost";
import Preferences from "./navigation/screens/Preferences";
import Preferences2 from "./navigation/screens/Preferences2";
import Followers from "./navigation/screens/Followers";
import RecivedInvites from "./navigation/screens/RecivedInvites";
import ViewInvite from "./navigation/screens/ViewInvite";
import Sustainability from "./navigation/screens/Sustainability";
import Carpool from "./navigation/screens/Carpool";
import Comment from "./navigation/screens/Comment";

// create a "stack"
const MyStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator screenOptions={{headerShown: false}}>
        <MyStack.Screen name="Login" component={Login} />
        <MyStack.Screen name="Register" component={Register} />
        <MyStack.Screen name="HomeScreen" component={HomeScreen} />
        <MyStack.Screen name="OfferScreen" component={OfferScreen} />
        <MyStack.Screen name="InviteScreen" component={InviteScreen} />
        <MyStack.Screen name="RecivedInvites" component={RecivedInvites} />
        <MyStack.Screen name="ViewInvite" component={ViewInvite} />
        <MyStack.Screen name="Profile" component={Profile} />
        <MyStack.Screen name="Profile2" component={Profile2} />
        <MyStack.Screen name="Preferences" component={Preferences} />
        <MyStack.Screen name="Preferences2" component={Preferences2} />
        <MyStack.Screen name="Followers" component={Followers} />
        <MyStack.Screen name="Map" component={Map} />
        <MyStack.Screen name="AddPost" component={AddPost} />  
        <MyStack.Screen name="Sustainability" component={Sustainability} />  
        <MyStack.Screen name="Carpool" component={Carpool} />  
        <MyStack.Screen name="Comment" component={Comment} />  


      </MyStack.Navigator>
    </NavigationContainer>
  );
};
console.disableYellowBox = true;
export default App;

