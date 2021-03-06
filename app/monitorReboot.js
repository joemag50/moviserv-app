import React from 'react';
import { StyleSheet,
         Image,
         KeyboardAvoidingView,
         Text,
         View,
         TouchableOpacity,
         ScrollView } from 'react-native';
import Footer from './footer';

class MonitorReboot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
    }
    this.nameservers();
  }

  componentDidMount() {
    this.nameservers();
  }

  componentWillUnmount() {
    this.isUnmounted = true;
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
      if (this.isUnmounted) { return; }

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
        <View style={styles.button_container} key={object.name} >
          <TouchableOpacity onPress={() => { this.reboot(object.id) }}
                            style={styles.button}
            >
          <Text style={styles.button_text_small}>{object.name}</Text>
          </TouchableOpacity>
        </View>
      );
    }.bind(this));
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <View style={styles.top_container}>
          <Text style={styles.button_text}>
          Reboot Servers
          </Text>
        </View>
        <ScrollView style={styles.scrollcontainer} >
          {itemList}
        </ScrollView>
        <Footer />
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
  top_container: {
    width: '90%',
    marginTop: 60,
  },
  scrollcontainer: {
    width: '90%',
    flex: 1,
    marginTop: 10,
    marginBottom: 60,
  },
  image: {
    flex: 3,
    width: 300,
    resizeMode: 'contain'
  },
  button_container: {
    marginVertical: 5,
    width: '100%',
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
  },
});

export default MonitorReboot
