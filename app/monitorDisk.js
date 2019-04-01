import React from 'react';
import { StyleSheet, Image,
         KeyboardAvoidingView,
         Text, View, Button } from 'react-native';
import DiskText from './disk-text';

class MonitorDisk extends React.Component {
  constructor(props) {
    super(props);
    this.getDiskInfo();
    this.state = {
      disks: []
    };
  }

  getDiskInfo = () => {
    URL_token = URL + '/api/disk/?user[email]=' + email +
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
        this.setState({ disks: response.object })
      } else {

      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    var itemList = [];

    this.state.disks.forEach(function (object) {
      itemList.push(
        <DiskText name={ object.name }
                 total={ object.total }
                 available={ object.avalible }
                 unused={ object.unused } >
        </DiskText>
      );
    }.bind(this));

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        {itemList}
        <View style={styles.bottom}>
          <Image style={styles.image} source={require('../assets/logo.jpeg')} />
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
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
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
  }
});

export default MonitorDisk