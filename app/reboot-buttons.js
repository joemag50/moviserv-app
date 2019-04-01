import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
class RebootButton extends React.Component {

  render() {
    return (
    <View style={styles.container}>
	    <View style={styles.button} >
	      <Button onPress={this.props.onPress} title={this.props.title} color="#846997ff"
	        accessibilityLabel="" />
	    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0
  },
  top: {
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    top: 30
  },
  image: {
    width: 100,
    resizeMode: 'contain'
  },
  text: {
    color: '#FFF',
    paddingTop: 35,
    fontSize: 18,
  },
  button: {
    marginVertical: 5,
    width: '90%',
  }
});

export default RebootButton