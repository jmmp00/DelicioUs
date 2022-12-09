import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {useFonts} from "expo-font";

const Login = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    return (
      
      <View style={styles.containerLogo}>    
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
  
        <View style={styles.container}>
        <StatusBar style="auto" />
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username/Email"
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => props.navigation.navigate('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
  
        <View style={styles.row}>
          <Text>Don't have an account? </Text>    
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
              <Text style={{
              color:"#F7B8B4",
            }}>Register</Text>
            </TouchableOpacity>
       
        </View>
  
  
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    containerLogo: {
      flex: 1,
      backgroundColor: '#F8F8FF',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    logo: {
      resizeMode: "cover",
      top: 100,
      height: 126,
      width: 275,
      marginBottom: 240,
    },
    inputView: {
      backgroundColor: "#F8F8FF",
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "#FCEE9B",
      height: 45,
      width: 250,
      marginBottom: 20,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginScreenButton:{
      alignItems: 'center',
      height: 40,
      width:100,
      paddingTop:8,
      paddingBottom:10,
      backgroundColor:'#D3EAE8',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#D3EAE8'
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
    },
  });

  
export default Login;