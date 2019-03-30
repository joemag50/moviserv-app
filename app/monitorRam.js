import React from 'react';
import { StyleSheet, Image,
         KeyboardAvoidingView,
         Text, View, Button } from 'react-native';

class MonitorRam extends React.Component {
  constructor(props) {
    super(props);
    this.getRamInfo();
    this.state = {
      available: '',
      used: ''
    };
  }

  getRamInfo = () => {
    fetch(URL + 'ram', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (response.result)
      {
        this.setState({available: response.object.avalible})
        this.setState({used: response.object.used})
      } else {

      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <View style={styles.top}>
          <Text style={styles.text} >
            Ram
          </Text>
        </View>
        <View >
          <Text style={styles.text} >
            Available: { this.state.available }
          </Text>
        </View>
        <View >
          <Text style={styles.text} >
            Used: { this.state.used }
          </Text>
        </View>
        <View style={styles.button} >
          <Button onPress={this.getRamInfo} title="Get Ram Info" color="#846997ff"
            accessibilityLabel="" />
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
  },
  button: {
    marginVertical: 5,
    width: '90%',
  }
});

export default MonitorRam