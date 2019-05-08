import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image,
         TextInput,
         KeyboardAvoidingView,
         TouchableOpacity } from 'react-native';

class ChatNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat_email: '',
    };
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  validate = () => {
    const { chat_email }  = this.state ;
    if (chat_email.length == 0) {
      alert("Favor de colocar un email válido");
      return;
    }

    URL_token = URL + '/api_chat/new_chat/?user[email]=' + email +
                            '&user[password]=' + password +
                            '&chat[email]=' + chat_email;
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (response.result)
      {
        if (this.isUnmounted) {
          return;
        }

        global.chat_id = response.object.chat_id;
        global.chat_email = chat_email;
        this.props.navigation.navigate('ChatConversation');

      } else {
        alert(response.object);
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
                   onChangeText={(chat_email) => this.setState({chat_email})}
                   value={this.state.chat_email}
                   keyboardType="email-address"/>

        <View style={styles.button_container} >
          <TouchableOpacity onPress={this.validate}
                            style={styles.button}
            >
          <Text style={styles.button_text}>Crear chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button_container_50} >
          <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ChatMenu');
                            return;
                          }}
                            style={styles.button}
            >
          <Text style={styles.button_text_small}>Chats</Text>
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

export default ChatNuevo
