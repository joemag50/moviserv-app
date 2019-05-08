import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class TableTask extends React.Component {

  _alertIndex = (message, pid) => {
    Alert.alert("Mensaje", `Process is ${message}`);
    URL_token = "";

    if (message == "Start") {
      URL_token = URL + '/api/start_task/?user[email]=' + email +
                              '&user[password]=' + password + 
                               '&task[server_id]=' + this.props.server_id +
                               '&task[pid]=' + pid;
    } else {
      URL_token = URL + '/api/stop_task/?user[email]=' + email +
                              '&user[password]=' + password + 
                               '&task[server_id]=' + this.props.server_id +
                               '&task[pid]=' + pid;
    }

    fetch(URL_token, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then((response) => {
      Alert.alert("Mensaje", `Process finished: ${message}`);
      this.props.onPress();
    })
    .catch(error => console.log('fallo la sesion') );
  }

  render() {
    const element = (data, index, message, pid) => (
      <TouchableOpacity onPress={() => this._alertIndex(message, pid) }>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{message}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
    <View style={styles.tablecontainer}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={this.props.tableHead} style={styles.head} textStyle={styles.text}/>
        {
          this.props.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {
                rowData.map((cellData, cellIndex) => (
                  <Cell key={cellIndex}
                        data={(cellIndex === 3 || cellIndex === 4) ? element(cellData, index, (cellIndex === 4 ? "Start" : "Stop"), cellData) : cellData} textStyle={styles.text}/>
                ))
              }
            </TableWrapper>
          ))
        }
      </Table>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30,},
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6, color: '#fff' },
  row: { flexDirection: 'row'},
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },

  container: {
    flex: 5,
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
  button: {
    marginVertical: 5,
    width: '90%',
  }
});

export default TableTask