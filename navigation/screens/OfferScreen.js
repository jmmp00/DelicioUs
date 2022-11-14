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

const OfferScreen = props => {
  return (
    <View style={styles.containerLogo}>
    
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo2.png')}
      />
    </View>

    <View style = {styles.lineStyle} />  

    <Text style={styles.header}>In your area</Text>

    <View style = {styles.offerContainer}>
      <View style = {styles.innerContainer1}>  
        <Image style={styles.restPic} source={{uri : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'}} />
        <View style={styles.innerContainer2}>
          <Text style={styles.restName}>Restaurant's Name</Text>
          <View style={styles.innerContainer3}>
            <Text>Description (max 140 characters)</Text>
          </View>
        </View>
      </View>
    </View> 


    <View style={styles.nav}>
      <TouchableOpacity 
        style={styles.navButton2} 
        onPress={() => props.navigation.navigate('OfferScreen')}>
          <Image style={styles.navIcons} source={require('../../assets/images/badge-percentWHITE.png')} />
      </TouchableOpacity>   
      <TouchableOpacity 
        style={styles.navButton3}>
          <Image style={styles.navIcons} source={require('../../assets/images/map-marker.png')} />
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.navButton4}
        onPress={() => props.navigation.navigate('Profile')}>
          <Image style={styles.navIcons} source={require('../../assets/images/user.png')} />
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
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: -20, //Here is the trick
  },
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
  linePost:{
    borderWidth: 1,
    borderColor:'#D3EAE8',
    top: 15,
    alignSelf: 'stretch'
},
  userPhoto:{
  height: 80,
  width: 80,
  borderRadius: 40,
  borderWidth: 4,
  borderColor: '#D3EAE8',
},
  userPost:{
  top: 20,
  height: 260,
  width: 260,
  borderRadius: 130,
  marginBottom: 30,
},
  smallIcons:{
  width:15,
  height: 15,
},
  bigIcons:{
  width: 30,
  height: 30,
},
  userName:{
    fontSize:20,
    color: '#EB5F55',
    fontWeight: 'bold',
},
  row:{
    flexDirection: "row",
    flexWrap: "wrap",
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
  backgroundColor:'#EB5F55',
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
header:{
  top: 65,
  color: '#D3EAE8',
  fontSize: 25,
  fontWeight: 'bold',
  justiftyContent:"center", 
  alignItems:"center",
},
offerContainer: {
  top: 80,
  height: 150,
  width: 330,
  backgroundColor: '#FBEE9C', 
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#FBEE9C',
  flexDirection: "column",
  marginBottom: 15,
},
innerContainer1:{
  flexDirection: "row", 
  alignItems:'center',   
  height: 150, 
  width: 330, 
  padding:10,
},
restPic:{
  height:70, 
  width:70, 
  borderRadius: 35, 
  borderWidth: 2.5, 
  borderColor: '#D3EAE8',
},
innerContainer2:{
  flex:3, 
  alignItems:'center',   
  flexDirection: "column",
},
restName:{
  marginBottom: 10, 
  color:'#EB5F55', 
  fontWeight:'bold',
  fontSize: 16,
},
innerContainer3:{
  backgroundColor:'#D3EAE8', 
  padding: 9, 
  borderRadius: 15, 
  borderWidth: 2.5, 
  borderColor: '#D3EAE8',
},
});

export default OfferScreen;