import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Button } from 'react-native';
import TableTask from './table-task';
import Footer from './footer';

class MonitorTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: []
    }
  }

  //componentDidUpdate() {
  //  this.getTableInfo();
  //}

  componentDidMount() {
    this.getTableInfo();
  }

  getTableInfo = () => {
    URL_token = URL + '/api/tasks/?user[email]=' + email +
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
        this.setState({ tables: response.object })
      } else {

      }
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    var itemList = [];
    const state = this.state;

    this.state.tables.forEach(function (object) {
      itemList.push(
        <TableTask tableHead={object.tableHead}
                   tableData={object.tableData}
                   onPress={() => {
                    this.getTableInfo();
                   }}
                   key={object.name}
                   server_id={object.server_id} >
        </TableTask>
      );
    }.bind(this));

    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.button_text}>
          Tasks
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
    backgroundColor: '#B6D0F288',
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

export default MonitorTasks