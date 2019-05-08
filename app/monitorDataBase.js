import React from 'react';
import { StyleSheet, Image,
         ScrollView,
         Text, View, Button } from 'react-native';
import DiskText from './disk-text';

class MonitorDataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
    };
  }

  //componentDidUpdate() {
  //  this.getDbInfo();
  //}

  componentDidMount() {
    this.getDbInfo();
  }

  getDbInfo = () => {
    URL_token = URL + '/api/databases_index?user[email]=' + email +
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
        this.setState({ servers: response.object })
      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    var itemList = [];

    this.state.servers.forEach(function (object) {
      itemList.push(
        <View key={object.id}>
          <Text>
          {object.server_name}
          </Text>
          <Text>
          {object.name}
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: '100%',
            }}
          />
        </View>
      );
    }.bind(this));

    return (
      <View style={styles.container}>
        <View style={styles.top} >
          <ScrollView style={styles.scrollcontainer} >
            {itemList}
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <Image style={styles.image} source={require('../assets/logo.jpeg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
    backgroundColor: '#4b69a7ff',
  },
  container: {
    flex: 1,
    backgroundColor: '#4b69a7ff',
    justifyContent: 'center',
  },
  bottom: {
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0
  },
  top: {
    width: '100%', 
    height: '90%', 
    justifyContent: 'center', 
    position: 'absolute',
    top: 30
  },
  image: {
    width: 100,
    resizeMode: 'contain'
  },
  text: {
    color: '#FFF',
    paddingTop: 35,
    fontSize: 25,
  },
  button: {
    marginVertical: 5,
    width: '90%',
  },
});

export default MonitorDataBase
