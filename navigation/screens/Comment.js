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

import {useFonts} from "expo-font";

const Comment = props => {
  return (
    <View style={styles.background}>
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

  {/* image */}

    <View style={styles.postEach}>   
              <Image style={styles.userPost} source={{ uri:"data:image/jpeg;base64,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" }}/>


    <View>
                <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/marker.png')}/>
              <Text> IKEDA</Text>
            </View>

            <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/star.png')}/>
              <Text> 4/5</Text>
            </View>

            <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/align-center.png')}/>
              <Text> Good environment and service</Text>
            </View>

            <View style={styles.row}>
                <Image style={styles.smallIcons} source={require('../../assets/images/heart.png')}/>
                <Text> 16</Text>
            </View>
    </View>

     <View style={styles.row}>  
     <Image style={styles.userPhoto} source={require('../../assets/images/profilepics/profilePic.jpg')}/>     
        <View style={styles.commentCard}>
            <Text style={styles.userName}>JessFromPorto</Text>
            <Text>That looks amazing!</Text>
        </View>
    </View>

    <View style={styles.row}>  
     <Image style={styles.userPhoto} source={{ uri:"https://media.self.com/photos/5f490e4e4a75ee30a626683e/4:3/w_2560%2Cc_limit/woman_food_donut.jpeg" }}/>     
        <View style={styles.commentCard}>
            <Text style={styles.userName}>SamanthaLevy</Text>
            <Text>You should have tried the tuna sashimi</Text>
        </View>
    </View>

    <View style={styles.row}>  
     <Image style={styles.userPhoto} source={{ uri:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" }}/>     
        <View style={styles.commentCard}>
            <Text style={styles.userName}>DavidSummers</Text>
            <Text>Looks really good.</Text>
        </View>
    </View>

          </View>

          
        <View style={styles.inputView}>
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
            <Image style={styles.navIcons} source={require('../../assets/images/envelope-plus.png')} />
        </TouchableOpacity> 
        <TouchableOpacity 
          style={styles.navButton1}
          onPress={() => props.navigation.navigate('HomeScreen')}>
            <Image style={styles.home} source={require('../../assets/images/homeWHITE.png')} />
        </TouchableOpacity> 
        </View>


        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#F8F8FF',
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed', //Here is the trick
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
    alignSelf: 'center',
},
  userPhoto:{
  height: 30,
  width: 30,
  borderRadius: 15,
  alignSelf: 'center',
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
    fontSize: 15,
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
  backgroundColor: '#F8F8FF',
  justiftyContent:"center", 
  alignItems:"center",
  marginTop: 40, 
  width: '100%',
  flexDirection: "column",
},
//
commentCard: {
    top: 10,
    width: 250,
    backgroundColor: '#D3EAE8', 
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#D3EAE8',
    flexDirection: "column",
    marginBottom: 15,
    paddingLeft: 10,
    marginLeft: 5,
  },
  inputView: {
    top: 5,
    backgroundColor: "#F8F8FF",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#D3EAE8",
    height: 35,
    width: 250,
    marginBottom: 10,
  },
});

export default Comment;