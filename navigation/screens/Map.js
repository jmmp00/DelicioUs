import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableHighlight, Dimensions} from "react-native";
import MapView from "react-native-maps";



function Map(props)  {
    return (

        <View style={styles.containerLogo}>
    
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo2.png')}
          />
        </View>
    
        <View style = {styles.lineStyle} />  


        <View>
       <MapView style={styles.map} />

            <View style={styles.iconrow}>

                <View style={{flex: 1,}}>
                    <TouchableOpacity   onPress={() => props.navigation.navigate('Map')}>
                    <Image  style={styles.icon1} source={require('../../assets/images/bus.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 2, }}>
                    <TouchableOpacity  onPress={() => props.navigation.navigate('Map')}>
                    <Image  style={styles.icon2} source={require('../../assets/images/men.png')}/>
                    </TouchableOpacity>
                </View>

            </View>
                <View style={styles.iconrow2}>

                    <View style={{flex: 1,}}>
                        <TouchableOpacity   onPress={() => props.navigation.navigate('Map')}>
                            <Image  style={styles.icon3} source={require('../../assets/images/bike.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 2, }}>
                        <TouchableOpacity  onPress={() => props.navigation.navigate('Map')}>
                            <Image  style={styles.icon4} source={require('../../assets/images/burger.png')}/>
                        </TouchableOpacity>



                </View>

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
          <Image style={styles.navIcons} source={require('../../assets/images/map-markerWHITE.png')} />
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

}
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
    backgroundColor:'#EB5F55',
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
    //map screen
map: {
    top: 60,
    width: 320,
    height: 450,
},
iconrow: {
    flexDirection:"row",
    alignItems:"center",
    height:150,
    top: 20,
},
icon1: {
    width:100,
    height:60,
    resizeMode: "contain",
    marginLeft:20,
},
icon2: {
    width:100,
    height:60,
    resizeMode: "contain",
    marginLeft:80,
},
iconrow2: {
            flexDirection:"row",
            alignItems:"center",
            height:150,
},
icon3: {
    width:100,
    height:60,
    resizeMode: "contain",
    marginLeft:20,
    marginBottom:130,
},
icon4: {
    width:100,
    height:60,
    resizeMode: "contain",
    marginLeft:80,
    marginBottom:110,
},
}
)
export default Map;
