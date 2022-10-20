import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const Screen2 = props => {
  return (
    <View style={styles.containerLogo}>
    <Image
    style={styles.logo}
    source={require('../assets/images/logo2.png')}
  />

<View style = {styles.lineStyle} />  

    <View style={styles.screen}>
      <Text>This will be the home page, eventually</Text>
      <Button
        onPress={() => props.navigation.navigate('Login')}
        title="Go to Login"
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    alignItems: 'center',
  },
  logo: {
    resizeMode: "cover",
    top: 50,
    height: 50,
    width: 50,
    marginBottom: 50,
  },
  lineStyle:{
    borderWidth: 1,
    borderColor:'#EB5F55',
    top:25,
    alignSelf: 'stretch'
},
});

export default Screen2;