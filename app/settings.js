import React from 'react';
import { StyleSheet,
         Image,
         KeyboardAvoidingView,
         Text,
         View,
         TouchableOpacity } from 'react-native';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    URL_token = URL + 'api/logout/?user[email]=' + email +
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
        <View style={styles.button_container_50} >
          <TouchableOpacity onPress={this.logout}
                            style={styles.button}
            >
          <Text style={styles.button_text_small}>Logout</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 3,
    width: 300,
    resizeMode: 'contain'
  },
  input: {
    height: 50,
    backgroundColor: white,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    width: '90%',
    borderRadius: 20,
  },
  button_container: {
    marginVertical: 5,
    width: '90%',
    height: 50,
  },
  button_container_50: {
    marginVertical: 5,
    width: '60%',
    height: 50,
  },
  button: {
    borderRadius: 20,
    backgroundColor: palet1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: white,
    fontSize: 20,
  },
  button_text_small: {
    color: white,
    fontSize: 15,
  }
});

export default Settings
