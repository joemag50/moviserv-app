import React from 'react';
import { StyleSheet,
         Image,
         ScrollView,
         Text,
         View } from 'react-native';
import Footer from './footer';
import DiskText from './disk-text';

class MonitorDisk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disks: []
    };
  }

  componentDidUpdate() {
    this.getDiskInfo();
  }

  componentDidMount() {
    this.getDiskInfo();
  }

  componentWillUnmount() {
    this.isUnmounted = true;
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
      if (this.isUnmounted) { return; }

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
                 unused={ object.unused }
                 key={object.name} >
        </DiskText>
      );
    }.bind(this));

    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.button_text}>
          Disk
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

export default MonitorDisk
