import React from 'react';
import {
  View, 
  StyleSheet, 
  Image,
  Text,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from 'react-native';

const Sustainability = props => {
  return (
    <View style={styles.containerLogo}>
    
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo2.png')}
      />

<TouchableOpacity  onPress={() => props.navigation.goBack()}>
          <Image style={{
            top: 3,
            width:30,
            height: 20,
            left:-160,
          }} source={require('../../assets/images/arrow-small-left.png')} />
        </TouchableOpacity>

    </View>

    <View style = {styles.lineStyle} />  

    <View style = {styles.container1}>
          <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 5,}}>What is CO2e?</Text>
          <Text>CO2e means "Carbon Dioxide Equivalent" and it's expressed in Kg.</Text>
    </View> 
     
    <Image 
        style= {{top:37.5, right: -85, height: 200, width: 160,}}
        source={require('../../assets/ilustrations/1.png')} />

    <View style={styles.container2}>
        <Text style={{fontWeight: "bold"}}>Greenhouse Gas, GHG</Text>
        <Text>Any gas in the atmosphere that absorbs and re-emits heat, and therefore warms our planet's atmosphere.</Text>
    </View>

    <View style={styles.container3}>
        <Text>CO2 is the most common GHG emitted by human activity.</Text>
        <Text>CO2e is the way to express all GHG quantities as an amount of CO2 that would create the same global warming impact.</Text>
    </View>

    <Image 
        style= {{top:-95, left: -85, height: 175, width: 150}}
        source={require('../../assets/ilustrations/2.png')} />

    <View style={styles.container4}>
        <Text style={{fontWeight:"bold"}}>By using the app's Carpool Feature, Cupons or if you choose to use public transportation, you're saving the planet!</Text>
    </View>
   
      <View style={styles.nav}>
      <TouchableOpacity 
        style={styles.navButton2} 
        onPress={() => props.navigation.navigate('OfferScreen')}>
          <Image style={styles.navIcons} source={require('../../assets/images/badge-percent.png')} />
      </TouchableOpacity>   
      <TouchableOpacity 
        style={styles.navButton3}
        onPress={() => props.navigation.navigate('Map')}>
          <Image style={styles.navIcons} source={require('../../assets/images/map-marker.png')} />
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.navButton4}
        onPress={() => props.navigation.navigate('Profile')}>
          <Image style={styles.navIcons} source={require('../../assets/images/userWHITE.png')} />
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.navButton5}
        onPress={() => props.navigation.navigate('InviteScreen')}>
          <Image style={styles.navIcons} source={require('../../assets/images/envelope-plus.png')} />
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.navButton1}
        onPress={() => props.navigation.navigate('HomeScreen')}>
          <Image style={styles.home} source={require('../../assets/images/home.png')} />
      </TouchableOpacity> 
      </View>


      
    </View>
  );
};

const styles = StyleSheet.create({
  //top logo bar
  containerLogo: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    alignItems: 'center',
  },
  logo: {
    resizeMode: "cover",
    top: 30,
    height: 55,
    width: 55,
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#EB5F55',
    top:30,
    alignSelf: 'stretch'
},
//bottom nav bar
nav: {
  paddingTop:7,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed', //Here is the trick
  bottom: -20, //Here is the trick
},
home:{
  width: 40,
  height: 40,
},
navIcons:{
  width: 25,
  height: 25,
},
navButton2:{
  justiftyContent:"center", 
  alignItems:"center",
  left:-150,
  bottom:-160,
  height: 40,
  width:100,
  paddingTop:7,
  paddingLeft:0,
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
navButton3:{
  justiftyContent:"center", 
  alignItems:"center",
  left:-50,
  bottom:-120,
  height: 40,
  width:100,
  paddingTop:7,
  paddingRight:15,
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
navButton1:{
  justiftyContent:"center", 
  alignItems:"center",
  height: 60,
  width:60,
  bottom:20,
  paddingTop:5,
  paddingRight:3,
  backgroundColor:'#F8F8FF',
  borderRadius:30,
  borderWidth: 3,
  borderColor: '#EB5F55'
},
navButton5:{
  justiftyContent:"center", 
  alignItems:"center",
  right:-50,
  bottom:-40,
  height: 40,
  width:100,
  paddingTop:7,
  paddingLeft:15,
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
navButton4:{
  justiftyContent:"center", 
  alignItems:"center",
  right:-150,
  bottom:-80,
  height: 40,
  width:100,
  paddingTop:7,
  paddingRight:0,
  backgroundColor:'#EB5F55',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
//recieved invites screen
container1: {
    padding: 10,
  top: 50,
  width: 300,
  backgroundColor: '#D3EAE8', 
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#D3EAE8',
  flexDirection: "column",
  marginBottom: 15,
  alignItems: "center",
},
container2: {
  top: -130,
  left: -80,
  width: 160,
  height: 140,
  padding:5,
  backgroundColor: '#D3EAE8', 
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#D3EAE8',
  alignItems: "center",
},
container3: {
    padding: 10,
    top: -95,
    width: 300,
    backgroundColor: '#D3EAE8', 
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#D3EAE8',
    flexDirection: "column",
    marginBottom: 15,
    alignItems: "center",
  },
  container4: {
    top: -250,
    right: -85,
    width: 160,
    height: 120,
    padding:5,
    backgroundColor: '#D3EAE8', 
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#D3EAE8',
    alignItems: "center",
  },
row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Sustainability;