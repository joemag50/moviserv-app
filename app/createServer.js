import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image,
         TextInput,
         KeyboardAvoidingView,
         TouchableOpacity } from 'react-native';

class CreateServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server_name: '',
      server_address: ''
    };
  }

  create_server_request = () => {
    const { server_name, server_address }  = this.state ;
    if (server_name.length == 0) {
      alert("Favor de llenar el nombre");
      return;
    }
    if (server_address.length == 0) {
      alert("Favor de llenar la ruta");
      return;
    }

    URL_token = URL + '/api/create_server/?user[email]=' + email +
                            '&user[password]=' + password + 
                            '&server[name]=' + server_name +
                            '&server[address]=' + server_address;
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (response.result)
      {
        alert("Servidor creado correctamente");
      } else {
        alert("(Error)");
      }
    })
    .catch(error => console.log('fallo la sesion') );
    return;
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Image style={styles.image} source={require('../assets/logo.jpeg')} />
        <TextInput placeholder="Nombre" style={styles.input}
                   onChangeText={(server_name) => this.setState({server_name})}
                   value={this.state.server_name} />
        <TextInput placeholder="Ruta" style={styles.input}
                   onChangeText={(server_address) => this.setState({server_address})}
                   value={this.state.server_address} />
        <View style={styles.button_container} >
          <TouchableOpacity onPress={this.create_server_request}
                            style={styles.button}
            >
          <Text style={styles.button_text}>Crear servidor</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 60 }} />
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

export default CreateServer
