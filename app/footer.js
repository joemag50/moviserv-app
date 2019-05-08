import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Footer extends React.Component {

  render() {
    return (
      <View style={styles.bottom}>
        <Image style={styles.image} source={require('../assets/logo.jpeg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0
  },
  image: {
    width: 100,
    resizeMode: 'contain'
  },
});

export default Footer