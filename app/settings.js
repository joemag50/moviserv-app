import React from 'react';
import { StyleSheet, Image,
         KeyboardAvoidingView,
         Text, View, Button } from 'react-native';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    URL_token = URL + 'login/?user[email]=' + email +
                            '&user[password]=' + password;
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (response.result)
      {
        global.email = "";
        global.password = "";
        
        this.props.navigation.navigate('Login');
      } else {
        
      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Image style={styles.image} source={require('../assets/logo.jpeg')} />
        <View style={styles.button} >
          <Button onPress={this.logout} title="Logout" color="#846997ff"
            accessibilityLabel="" />
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
  image: {
    flex: 3,
    width: 300,
    resizeMode: 'contain'
  },
  button: {
    marginVertical: 5,
    width: '90%',
  }
});

export default Settings