import React from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         KeyboardAvoidingView,
         Button,
         TouchableOpacity,
         ScrollView } from 'react-native';

class ChatConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
    };
  }

  componentDidUpdate() {
    this.getMessages();
  }

  componentDidMount() {
    this.getMessages();
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  getMessages = () => {
    URL_token = URL + '/api_chat/messages/?user[email]=' + email +
                            '&user[password]=' + password +
                            '&chat_id=' + chat_id ;
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (this.isUnmounted) {
        return;
      }

      if (response.result)
      {
        this.setState({ messages: response.object })
      } else {

      }
    })
    .catch(error => console.log('fallo la sesion') );
    return;
  }

  validate = () => {
    const { message }  = this.state ;
    if (message.length == 0) {
      alert("El mensaje no puede estar vacio");
      return;
    }
    var new_message = message.replace(' ', '+')
    URL_token = URL + '/api_chat/send_message/?user[email]=' + email +
                            '&user[password]=' + password +
                            '&message=' + new_message +
                            '&to_user=' + chat_email;
    console.log(URL_token)
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (this.isUnmounted) {
        return;
      }

      if (response.result)
      {
        this.textInput.clear();
        this.getMessages();
      } else {

      }
    })
    .catch(error => console.log('fallo la sesion') );
    return;
  }

  render() {
    var itemList = [];

    this.state.messages.forEach(function (object) {
      itemList.push(
        <View key={object.id} style={styles.user_container} >
          <Text
            style={styles.user_message} 
            key={object.user_id} >
            {object.email}
          </Text>
          <Text
            style={styles.message} 
            key={object.message} >
            {object.message}
          </Text>
        </View>
      );
    }.bind(this));
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <View style={styles.top_container}>
          <Text style={styles.button_text}>
          {chat_email}
          </Text>
        </View>

        <ScrollView style={styles.scrollcontainer} >
          {itemList}
        </ScrollView>

        <View style={styles.two_columns_container}>
          <View style={styles.column0}>
            <TextInput placeholder="Mensaje" style={styles.input}
                       onChangeText={(message) => this.setState({message})}
                       ref={input => { this.textInput = input }}
                       value={this.state.message} />
          </View>
          <View style={styles.column1}>
            <View style={styles.button_container_30} >
              <TouchableOpacity onPress={this.validate}
                                style={styles.button}
                >
              <Text style={styles.button_text}>{"->"}</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    backgroundColor: '#B6D0F288',
    width: '90%',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    flex: 3,
    width: 300,
    resizeMode: 'contain'
  },
  button_container_30: {
    marginVertical: 5,
    width: '100%',
    height: 50,
  },
  button_container: {
    marginVertical: 5,
    width: '100%',
    height: 50,
  },
  button_container_bottom: {
    marginVertical: 5,
    marginLeft: 60,
    width: '30%',
    height: 50,
  },
  bottom: {
    width: '100%', 
    height: 100,
    justifyContent: 'center', 
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0
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
  user_container: {
    backgroundColor: '#344F73',
    width: '100%',
    marginVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  message: {
    fontSize: 18,
    color: '#FFF'
  },
  user_message: {
    fontSize: 12,
    color: '#FFF'
  },
  input: {
    height: 50,
    backgroundColor: white,
    marginVertical: 5,
    paddingHorizontal: 15,
    width: '100%',
    borderRadius: 20,
  },
  button_container_50: {
    marginVertical: 5,
    width: '60%',
    height: 30,
  },
  two_columns_container: {
    flexDirection: 'row',
    width: '90%',
  },
  column0: {
    width: '100%',
    flex: 9,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  column1: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default ChatConversation