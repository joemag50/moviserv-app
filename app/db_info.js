import React from 'react';
import { StyleSheet,
         Text,
         View,
         TouchableOpacity,
         Modal,
         ScrollView,
         Alert } from 'react-native';

class DbInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUsersVisible: false,
      isTablesVisible: false,
      pg_tables: [],
      pg_table_count: [],
      pg_users: [],
      pg_users_count: [],
    };
  }

  remove_user = (item_id) => {
    //http://localhost:3000/api/db_stats?db[server_id]=21
    URL_token = URL + '/api/db_remove_user?id=' + item_id;
    console.log(URL_token)
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      if (response.result)
      {
        this.validate();
        Alert.alert("Borrado");
      }
    })
    .catch(error => console.log('fallo la sesion') );
    return;
  }

  validate = () => {
    //http://localhost:3000/api/db_stats?db[server_id]=21
    URL_token = URL + '/api/db_stats?db[server_id]=' + this.props.object.id;
    console.log(URL_token)
    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {

      if (response.result)
      {
        this.setState({ pg_tables: response.object.pg_tables })
        this.setState({ pg_table_count: response.object.pg_table_count })
        this.setState({ pg_users: response.object.pg_users })
        this.setState({ pg_users_count: response.object.pg_users_count })
      }
    })
    .catch(error => console.log('fallo la sesion') );
    return;
  }

  GetItem(item) {
    Alert.alert('Desconectar', 'Seguro que desea desconectar a: ' + item.name,
    [
      {
        text: 'Desconectar',
        onPress: () => {
          this.remove_user(item.id);
        }
      },
      {
        text: 'Cancelar',
        onPress: () => {
        },
        style: 'cancel',
      },
    ]);
  }

  render() {
    var itemTables = [];
    var itemUsers = [];

    this.state.pg_tables.forEach(function (object) {
      itemTables.push(
        <View key={object.id} style={styles.button_container}>
          <TouchableOpacity style={styles.button_2} >
            <Text style={styles.button_text_small} >{object.name}</Text>
          </TouchableOpacity>
        </View>
      );
    }.bind(this));

    this.state.pg_users.forEach(function (object) {
      itemUsers.push(
        <View key={object.id} style={styles.button_container}>
          <TouchableOpacity style={styles.button_1}
                            onPress={() => {
                              this.GetItem(object)
                            }}
          >
            <Text style={styles.button_text_small} >{object.name}</Text>
          </TouchableOpacity>
        </View>
      );
    }.bind(this));

    return (
    <View style={styles.container}>

        <View>
          <Modal animationType={"slide"}
                 transparent={false}
                 visible={this.state.isUsersVisible}
                 onRequestClose={() => {console.log("Modal has been closed.")}}
          >
            <View style={styles.modal}>
              <View style={styles.top_container}>
                <Text style={styles.button_text}>Usuarios: {this.state.pg_users_count}</Text>
              </View>
        <ScrollView style={styles.scrollcontainer} >
          {itemUsers}
        </ScrollView>
              <View style={styles.button_container} >
                <TouchableOpacity style={styles.button_00}
                                  onPress={() => {this.setState({ isUsersVisible:!this.state.isUsersVisible})} }
                >
                  <Text style={styles.button_text_small} >CERRAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal animationType={"slide"}
                 transparent={false}
                 visible={this.state.isTablesVisible}
                 onRequestClose={() => {console.log("Modal has been closed.")}}
          >
            <View style={styles.modal}>
              <View style={styles.top_container}>
                <Text style={styles.button_text}>Tablas: {this.state.pg_table_count}</Text>
              </View>
        <ScrollView style={styles.scrollcontainer} >
          {itemTables}
        </ScrollView>
              <View style={styles.button_container} >
                <TouchableOpacity style={styles.button_00}
                                  onPress={() => {this.setState({ isTablesVisible:!this.state.isTablesVisible})} }
                >
                  <Text style={styles.button_text_small} >CERRAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>



      <View style={styles.button_container} >
        <TouchableOpacity style={styles.button_00}
          >
        <Text style={styles.button_text_big}>{ this.props.object.server_name }</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_container} >
        <TouchableOpacity style={styles.button_0}
          >
        <Text style={styles.button_text}>DataBase: { this.props.object.name }</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.two_columns_container} >
        <View style={styles.column} >
          <View style={styles.button_container} >
            <TouchableOpacity style={styles.button_1}
                    onPress={() => {
                    this.validate();
                    this.setState({ isTablesVisible: true});
                  }}>
            <Text style={styles.button_text_small}>Tablas</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.column} >
          <View style={styles.button_container} >
            <TouchableOpacity style={styles.button_2}
                    onPress={() => {
                    this.validate();
                    this.setState({ isUsersVisible: true});
                  }}>
            <Text style={styles.button_text_small}>Users</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 20,
          width: '100%',
        }}
      />
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
    width: '100%',
    height: 50,
  },
  button_container_50: {
    width: '60%',
    height: 50,
  },
  button_00: {
    backgroundColor: '#B6D0F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_0: {
    backgroundColor: '#6DA7F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_1: {
    backgroundColor: '#4B72A6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_2: {
    backgroundColor: '#344F73',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text_big: {
    color: white,
    fontSize: 25,
  },
  button_text: {
    color: white,
    fontSize: 20,
  },
  button_text_small: {
    color: white,
    fontSize: 15,
  },
  two_columns_container: {
    flexDirection: 'row',
    width: '100%',
  },
  column: {
    width: '100%',
    flex: 5,
    flexDirection: 'column',
  },
  modal: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: palet3,
     padding: 5,
  },
});

export default DbInfo