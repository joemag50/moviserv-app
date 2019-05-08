import React from 'react';
import { StyleSheet,
         Image,
         ScrollView,
         Text,
         View } from 'react-native';
import Footer from './footer';
import RamText from './ram-text';

class MonitorRam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rams: []
    };
  }

  componentDidUpdate() {
    this.getRamInfo();
  }

  componentDidMount() {
    this.getRamInfo();
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  getRamInfo = () => {
    URL_token = URL + '/api/ram/?user[email]=' + email +
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
        this.setState({ rams: response.object })
      } else {

      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    var itemList = [];

    this.state.rams.forEach(function (object) {
      itemList.push(
          <RamText name={ object.name }
                   total={ object.total }
                   available={ object.avalible }
                   unused={ object.unused }
                   key={object.name} >
          </RamText>
      );
    }.bind(this));
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.button_text}>
          RAM
          </Text>
        </View>
        <ScrollView style={styles.scrollcontainer} >
          {itemList}
        </ScrollView>
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
  button_container_50: {
    marginVertical: 5,
    width: '60%',
    height: 50,
  },
  button: {
    borderRadius: 20,
    backgroundColor: palet2,
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

export default MonitorRam
