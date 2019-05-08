import React from 'react';
import { StyleSheet,
         Image,
         ScrollView,
         Text,
         View,
         TouchableOpacity } from 'react-native';
import Footer from './footer';

class ChatMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: []
    };
  }

  componentDidUpdate() {
    this.getChats();
  }

  componentDidMount() {
    this.getChats();
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  save_chat_mail = (partner_email, chat_id) => {
    global.chat_id = chat_id;
    global.chat_email = partner_email;
    this.props.navigation.navigate('ChatConversation');
  }

  getChats = () => {
    URL_token = URL + '/api_chat/chats/?user[email]=' + email +
                            '&user[password]=' + password ;
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
        this.setState({ chats: response.object })
      } else {

      }
    })
    .catch(error => console.log('fallo la sesion') );
    return;
  }

  render() {
    var itemList = [];

    this.state.chats.forEach(function (object) {
      itemList.push(
        <View style={styles.button_container} key={object.partner_email} >
          <TouchableOpacity onPress={() => {
              this.save_chat_mail(object.partner_email, object.chat_id)
            }}
                            style={styles.button}
            >
          <Text style={styles.button_text}>{ object.partner_email }</Text>
          </TouchableOpacity>
        </View>
      );
    }.bind(this));

    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.button_text}>
          Chats
          </Text>
        </View>
        <ScrollView style={styles.scrollcontainer} >
          {itemList}
        </ScrollView>

        <View style={styles.bottom}>
          <View style={styles.button_container_bottom} >
            <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate('ChatNuevo');
                              return;
                            }}
                              style={styles.button}
              >
            <Text style={styles.button_text_small}>Nuevo Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </View>
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
  button_container_bottom: {
    marginVertical: 5,
    marginLeft: 60,
    width: '30%',
    height: 50,
  },
  bottom: {
    width: '100%', 
    height: 50,
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
});

export default ChatMenu