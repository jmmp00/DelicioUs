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

const Preferences2 = props => {
  return (
    <View style={styles.containerLogo}>
    
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo2.png')}
      />

    </View>

    <View style = {styles.lineStyle} />  
    
    <View style={styles.topContainer}>    
      <Image
        style={styles.profilePic}
        source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoQFvYAr4KD4S-iecBnmLmPf7zuyFyHkd8w&usqp=CAU"}}
      />

      <Text style={styles.profileUsername}>LauraJones</Text>
    </View>

    <View style={styles.Sustainability}>
    <TouchableOpacity
    onPress={() => props.navigation.navigate('Sustainability')}>
      <Image
        style={{height: 20, width: 20,}}
        source={require('../../assets/images/smoke.png')}
      />
      <Text style={{color: "#F7B8B4",}}>2 kg</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.menuContainer}>
      <TouchableOpacity 
        style={styles.menuSelected}>
          <Text style={styles.textSelected}>Preferences</Text>
      </TouchableOpacity>   
      <TouchableOpacity 
        style={styles.menuNotSelected}
        onPress={() => props.navigation.navigate('Profile')}>
          <Text style={styles.textNotSelected}>Posts</Text>
      </TouchableOpacity>   
      <TouchableOpacity 
        style={styles.menuNotSelected} 
        onPress={() => props.navigation.navigate('Followers')}>
          <Text style={styles.textNotSelected}>Followers</Text>
      </TouchableOpacity>   

      </View>



      <View style={styles.prefRow}>  
        <View style={styles.pref}>  
          <Image style={styles.prefIcon} source={require('../../assets/images/pref-icons/fish.png')} />
          <Text style={styles.prefText}>Fish</Text>
        </View>

        <View style={styles.pref}>  
          <Image style={styles.prefIcon} source={require('../../assets/images/pref-icons/turkey.png')} />
          <Text style={styles.prefText}>Poultry</Text>
        </View>

        <View style={styles.pref}>  
          <Image style={styles.prefIcon} source={require('../../assets/images/pref-icons/sushi.png')} />
          <Text style={styles.prefText}>Japanese</Text>
        </View>


        <View style={styles.pref}>  
          <Image style={styles.prefIcon} source={require('../../assets/images/pref-icons/hamburger.png')} />
          <Text style={styles.prefText}>Savoury</Text>
        </View>

        <View style={styles.pref}>  
          <Image style={styles.prefIcon} source={require('../../assets/images/pref-icons/carrot.png')} />
          <Text style={styles.prefText}>Vegetables</Text>
        </View>

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
        onPress={() => props.navigation.navigate('Login')}>
          <Image style={styles.navIcons} source={require('../../assets/images/exit.png')} />
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
    top:50,
    alignSelf: 'stretch'
},
//bottom nav bar
nav: {
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
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
//profile (preferences) screen
topContainer:{
  justiftyContent:"center", 
  alignItems:"center",
  top: 100,
},
profilePic:{
  height: 120,
  width: 120,
  borderRadius: 60,
  marginBottom: 10,
},
profileUsername:{
  fontWeight: 'bold',
  fontSize: 19,
},
menuContainer:{
  top: 100,  
  flexDirection: "row", 
  width: '100%', 
},
menuNotSelected:{  
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55', 
  height: 50, 
  width: 130.8, 
  alignItems: 'center',
},
menuSelected:{  
  backgroundColor:'#EB5F55',
  borderWidth: 1,
  borderColor: '#EB5F55', 
  height: 50, 
  width: 130.8, 
  alignItems: 'center',
},
textNotSelected:{  
  color:'#EB5F55', 
  paddingTop: 13,
},
textSelected:{  
  color:'#fff', 
  paddingTop: 13,
},
//preference icons
prefRow:{
  width: '100%',
  alignContent: 'stretch',
  justifyContent: 'flex-start',
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 100,
},
prefIcon:{
  height: 25,
  width: 25,
  marginBottom:5,
},
prefText:{
  color:"#000",
  fontWeight: "bold",
},
pref:{
  height: 70,
  width: 95,
  alignItems: 'center',
  padding: 10,
  margin: 15,
  marginLeft: 20,
},
Sustainability:{
  width: 60,
  height: 50,
  alignItems: "center",
  top: -90,
  right: -150,
},
});

export default Preferences2;