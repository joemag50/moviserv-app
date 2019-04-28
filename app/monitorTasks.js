import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Button } from 'react-native';
import TableTask from './table-task';

class MonitorTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: []
    }
  }

  componentDidUpdate() {
    this.getTableInfo();
  }

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
                   key={object.name}
                   server_id={object.server_id} >
        </TableTask>
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
        <View style={styles.bottom2}>
          <Button onPress={this.getTableInfo}
                  title="Actualizar"
                  color="#841584" >
          </Button>
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
  bottom2: {
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'flex-end',
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

export default MonitorTasks