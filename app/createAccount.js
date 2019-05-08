import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image,
         TextInput,
         KeyboardAvoidingView,
         TouchableOpacity } from 'react-native';

global.URL = 'https://moviserv-web.herokuapp.com/';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  validate = () => {
    const { email, password }  = this.state ;
    if (email.length == 0) {
      alert("Favor de colocar un email válido");
      return;
    }
    if (password.length == 0) {
      alert("Favor de colocar la contraseña");
      return;
    }

    URL_token = URL + '/api/create_account/?user[email]=' + email +
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
        global.email = email;
        global.password = password;
        global.id = response.object.id;

        alert("Cuenta creada correctamente");
        this.props.navigation.navigate('Menu');
      } else {
        alert("El correo ha sido tomado o la contraseña es muy corta (6)");
      }
    })
    .catch(error => console.log('fallo la sesion') );
    return;
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Image style={styles.image} source={require('../assets/logo.jpeg')} />
        <TextInput placeholder="Email" style={styles.input}
                   onChangeText={(email) => this.setState({email})}
                   value={this.state.email}
                   keyboardType="email-address"/>
        <TextInput placeholder="Password" style={styles.input}
                   onChangeText={(password) => this.setState({password})}
                   value={this.state.password} secureTextEntry={true} />
        <View style={styles.button_container} >
          <TouchableOpacity onPress={this.validate}
                            style={styles.button}
            >
          <Text style={styles.button_text}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button_container_50} >
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login'); }}
                            style={styles.button}
            >
          <Text style={styles.button_text_small}>Ya tengo cuenta</Text>
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
    backgroundColor: palet5,
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

export default CreateAccount