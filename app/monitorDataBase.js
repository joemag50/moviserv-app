import React from 'react';
import { StyleSheet,
         Image,
         ScrollView,
         Text,
         View,
         Button } from 'react-native';
import Footer from './footer';
import DbInfo from './db_info';

class MonitorDataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
    };
  }

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
        <DbInfo key={object.id} object={object} />
      );
    }.bind(this));

    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.button_text}>
          Data Bases
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

export default MonitorDataBase
