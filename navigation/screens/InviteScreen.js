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

const InviteScreen = props => {
  return (
    <View style={styles.containerLogo}>
    
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo2.png')}
      />

      <TouchableOpacity  onPress={() => props.navigation.goBack()}>
          <Image style={{
            top: 0,
            width:20,
            height: 20,
            right:-150,
          }} source={require('../../assets/images/envelope.png')} />
        </TouchableOpacity>
    </View>

    <View style = {styles.lineStyle} />  

 

        <View style={styles.rowInvite}>  

        {/* fetch from the database on the next code */}
          <View style={styles.Invite}>
          <Image style={styles.InvitePic} source={{ uri:"https://freerangestock.com/sample/93712/girl-eating-food.jpg" }} />
          <Text style={styles.userName}>username</Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Invite</Text>
          </TouchableOpacity>
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
    top:50,
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
//invite page
userName:{
  fontSize:20,
  color: '#EB5F55',
  fontWeight: 'bold',
},
  rowInvite: {   
    width: '100%',
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 60,
},
  Invite: {
    paddingTop: 10,
    alignItems:'center',
    height: 130,
    width:120,
    backgroundColor:'#D3EAE8',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#D3EAE8',
    marginBottom: 10,
},
  InvitePic: {
    height: 62,
    width:62,
    borderRadius: 31,
    borderWidth: 2.5,
    borderColor: '#F7B8B4',
},
  button:{
    alignItems: 'center',
    height: 22.5,
    width:60,
    backgroundColor:'#F7B8B4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#F7B8B4'
},
  buttonText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
},
});

export default InviteScreen;