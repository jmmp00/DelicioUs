import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
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

const Register = props => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (

    <View style={styles.containerLogo}>    

        <TouchableOpacity  onPress={() => props.navigation.goBack()}>
          <Image style={{
            top: 50,
            width:30,
            height: 20,
            left:-170,
          }} source={require('../assets/images/arrow-small-left.png')} />
        </TouchableOpacity>

        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}/>


      <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
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

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
          style={styles.RegisterScreenButton}
          onPress={() => props.navigation.navigate('Screen2')}
          underlayColor='#fff'>
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>

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
    flex:0,
    resizeMode: "cover",
    top: 80,
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
  RegisterScreenButton:{
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
  RegisterText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    top:100,
  },
});

  
export default Register;