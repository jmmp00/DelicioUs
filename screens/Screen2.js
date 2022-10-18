import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Screen2 = props => {
  return (
    <View style={styles.screen}>
      <Text>This will be the home page, eventually</Text>
      <Button
        onPress={() => props.navigation.navigate('Login')}
        title="Go to Login"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen2;