import react ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function AddMedia() {




    const [image,setImage]=useState(null)

    /*
    const [image2,setImage2]=useState(null)
    const PicCamera = async () => {
        let result2 = await ImagePicker.launchCameraAsync(
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing:true
        )
    });
      if (!result2.cancelled) {
            setImage2(result2.uri);

     */
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing:true
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };



    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            {image && <Image source={{uri:image}} style={{flex:1,width:600}} />}
            <Button title="Pick Image" onPress={pickImage}/>





            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})