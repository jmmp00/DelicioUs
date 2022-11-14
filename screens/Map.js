import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableHighlight, Dimensions} from "react-native";
import Login from "./Login";
import {useFonts} from "expo-font";
import MapView from "react-native-maps";



function Map(props)  {

    return (

    <View style={styles.container}>
        <View>
       <MapView style={styles.map} />

            <View style={styles.iconrow}>

                <View style={{flex: 1,}}>
                    <TouchableOpacity   onPress={() => props.navigation.navigate('Map')}>
                    <Image  style={styles.icon1} source={require('../assets/images/bus.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 2, }}>
                    <TouchableOpacity  onPress={() => props.navigation.navigate('Map')}>
                    <Image  style={styles.icon2} source={require('../assets/images/men.png')}/>
                    </TouchableOpacity>
                </View>

            </View>
                <View style={styles.iconrow2}>

                    <View style={{flex: 1,}}>
                        <TouchableOpacity   onPress={() => props.navigation.navigate('Map')}>
                            <Image  style={styles.icon3} source={require('../assets/images/bike.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 2, }}>
                        <TouchableOpacity  onPress={() => props.navigation.navigate('Map')}>
                            <Image  style={styles.icon4} source={require('../assets/images/car.png')}/>
                        </TouchableOpacity>



                </View>

            </View>
        </View>

    </View>


    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F8F8FF',
    },

    map: {
        width: 320,
        height: 450,
    },

    iconrow: {
        flexDirection:"row",
        alignItems:"center",
        height:150,

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
