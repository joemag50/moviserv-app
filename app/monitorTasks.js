import React from 'react';
import { StyleSheet, Image, KeyboardAvoidingView, Text, View } from 'react-native';

class MonitorTasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <View style={styles.top}>
          <Text style={styles.text} >
            Tasks
          </Text>
        </View>
        <View style={styles.bottom}>
          <Image style={styles.image} source={require('../assets/logo.jpeg')} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b69a7ff',
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
    fontSize: 25,
  }
});

export default MonitorTasks