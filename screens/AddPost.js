import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableHighlight,} from "react-native";
import Login from "./Login";
import {useFonts} from "expo-font";

const AddPost = props => {
    let [fontsLoaded] = useFonts({
        'Pacifico': require('../assets/fonts/Pacifico.ttf')    });

    return(
        <View style={styles.container}>
            <View style={styles.circle}>
                <TouchableOpacity  onPress={() => props.navigation.navigate('Map')}>
                <Image  style={styles.blur} source={require('../assets/images/blur.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.inputView} >
                <TextInput style={styles.TextInput} placeholder="Restaurant's name"/>
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Rating"/>
            </View>

            <View style={styles2.inputView}>
                <TextInput style={styles2.TextInput} placeholder="Description"/>
            </View>

            <View>
                <TouchableOpacity style={styles.ShareButton} onPress={() => props.navigation.navigate('')}>
                    <Text style={{
                        color:"white", fontFamily:"Pacifico"
                    }}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    circle: {
        width: 164,
        height: 164,
        borderRadius: 164/2,

        marginBottom: 20,
        borderColor:"#EB5F55",
        marginTop:60,
    },

    blur: {
        resizeMode: "cover",
        height: 165,
        width: 165,

    },

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F8F8FF',
    },

    inputView: {
        backgroundColor: "#F8F8FF",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FCEE9B",
        height: 35,
        width: 250,
        marginBottom: 20,

    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 5,
        marginLeft: 10,
        color: "#D3EAE8",
        fontFamily: 'Pacifico',
        textAlignVertical: "top",

    },

    ShareButton: {
        alignItems: 'center',
        height: 40,
        width: 100,
        paddingTop: 8,
        paddingBottom: 10,
        backgroundColor: '#D3EAE8',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3EAE8'
    },


    })

const styles2 = StyleSheet.create({

    inputView: {
        backgroundColor: "#F8F8FF",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FCEE9B",
        height: 135,
        width: 250,
        marginBottom: 20,
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 5,
        marginLeft: 0,
        color: "#D3EAE8",
        fontFamily: 'Pacifico',
    },

})

export default AddPost;

