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

const HomeScreen = props => {
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
            width:30,
            height: 20,
            right:-150,
          }} source={require('../../assets/images/plus-small.png')} />
        </TouchableOpacity>
    </View>

    <View style = {styles.lineStyle} />  


        <View style={styles.postEach}>          
          <Image style={styles.userPhoto} source={{ uri:"https://media.self.com/photos/5f490e4e4a75ee30a626683e/4:3/w_2560%2Cc_limit/woman_food_donut.jpeg" }}/>
          <Text style={styles.userName}>username</Text>

          <View style={styles.row}>
            <Image style={styles.smallIcons} source={require('../../assets/images/marker.png')}/>
            <Text>location</Text>
          </View>

            <Image style={styles.userPost} source={{ uri:"https://cdn.discordapp.com/attachments/1021850459327184978/1034472218983403550/IMG_0339.png" }}/>
            <View style={styles.row}>
            <TouchableOpacity  onPress={() => props.navigation.goBack()}>
              <Image style={styles.bigIcons} source={require('../../assets/images/heart.png')} />
            </TouchableOpacity>
            <Text style={{color:'#FBEE9C', fontSize: 20, fontWeight: 'bold',}}>  |  </Text>
            <TouchableOpacity  onPress={() => props.navigation.goBack()}>
              <Image style={styles.bigIcons} source={require('../../assets/images/paper-plane.png')} />
            </TouchableOpacity>
          </View>
          
          
          <View style = {styles.linePost} />  
        </View>

         

    <View style={styles.nav}>
      <TouchableOpacity 
        style={styles.navButton2} 
        onPress={() => props.navigation.navigate('OfferScreen')}>
          <Image style={styles.navIcons} source={require('../../assets/images/badge-percent.png')} />
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
          <Image style={styles.home} source={require('../../assets/images/homeWHITE.png')} />
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
    top:30,
    alignSelf: 'stretch'
},
  linePost:{
    borderWidth: 1,
    width: 250,
    borderColor:'#D3EAE8',
    top: 15,
    alignSelf: 'center'
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
  backgroundColor:'#EB5F55',
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
postEach: {
  justiftyContent:"center", 
  alignItems:"center",
  marginTop: 50, 
  width: '100%',
  flexDirection: "column",
},
});

export default HomeScreen;