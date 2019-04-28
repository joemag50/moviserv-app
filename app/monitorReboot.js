import React from 'react';
import { StyleSheet, Image,
         KeyboardAvoidingView,
         Text, View, Button } from 'react-native';

class MonitorReboot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
    }
    this.nameservers();
  }

  nameservers = () => {
    URL_token = URL + '/api/servers/?user[email]=' + email +
                            '&user[password]=' + password + 
                             '&server[user_id]=' + id;
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (response.result)
      {
        this.setState({ servers: response.object })
      } else {
        
      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  reboot = (server_id) => {
    URL_token = URL + '/api/reboot/?user[email]=' + email +
                            '&user[password]=' + password + 
                             '&reboot[server_id]=' + server_id;
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (response.result)
      {
        alert(response.object.message)
      } else {
        
      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    var itemList = [];

    this.state.servers.forEach(function (object) {
      itemList.push(
        <View style={styles.button} key={object.name} >
          <Button
            onPress={() => { this.reboot(object.id) }}
            title={ 'Reboot: ' + object.name }
            color="#846997ff"
            accessibilityLabel="" />
        </View>
      );
    }.bind(this));
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Image style={styles.image} source={require('../assets/logo.jpeg')} />
        {itemList}
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

export default MonitorReboot
