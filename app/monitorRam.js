import React from 'react';
import { StyleSheet, Image,
         ScrollView,
         Text, View, Button } from 'react-native';
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

export default MonitorRam
