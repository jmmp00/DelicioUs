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

const ViewInvite = props => {
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

 {/* 1 invite */}

    <View style = {styles.followContainer}>
      <View style = {styles.innerContainer1}>  
        <Image style={styles.profilePic} source={{uri : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'}} />
        <Text style={styles.userName}>username</Text>
        <View style={styles.restName}>        
            <Image 
                style={{width:20, height: 20,}} 
                source={require('../../assets/images/marker.png')}/>
            <Text>Restaurant's Name</Text>
        </View>
        <View style={styles.dateTime}>        
            <Image 
                style={{width:20, height: 20,}} 
                source={require('../../assets/images/calendar.png')}/>
            <Text> Date/Time</Text>
        </View>
      </View>
      <View style={styles.row}>
            <TouchableOpacity 
                style={styles.innerContainer3}
                onPress={() => props.navigation.navigate('Carpool')}>
                <Text style={{color: 'white'}}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.innerContainer3}
                onPress={() => props.navigation.navigate('InviteScreen')}>
                <Text style={{color: 'white'}}>Decline</Text>
            </TouchableOpacity>  
          </View>  
    </View> 

 {/* end */}
          
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
          <Image style={styles.navIcons} source={require('../../assets/images/user.png')} />
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.navButton5}
        onPress={() => props.navigation.navigate('InviteScreen')}>
          <Image style={styles.navIcons} source={require('../../assets/images/envelope-plusWHITE.png')} />
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
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute', //Here is the trick
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
  backgroundColor:'#EB5F55',
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
//recieved invites screen
followContainer: {
  top: 50,
  height: 150,
  width: 300,
  backgroundColor: '#D3EAE8', 
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#D3EAE8',
  flexDirection: "column",
  marginBottom: 15,
},
innerContainer1:{
  flexDirection: "row", 
  alignItems:'center',   
  height: 90,
  width: 300,
  padding:10,
},
profilePic:{
  marginTop:25,
  height: 80, 
  width: 80, 
  borderRadius: 40,
  marginRight: 20, 
},
userName:{
  color:'#EB5F55', 
  fontWeight:'bold',
  top: -20,
  fontSize: 15,
},
innerContainer3:{   
  backgroundColor:'#F7B8B4', 
  padding: 6, 
  borderRadius: 10, 
  margin: 10,
},
row: {
    position: "absolute",
    bottom: 5,
    right: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:'center',
  },
restName:{
    left:-65,
    top: 5,
    flexDirection: "row",
},
dateTime:{
    left:-205,
    top: 30,
    flexDirection: "row",
},
});

export default ViewInvite;