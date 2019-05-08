import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class RamText extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.button_container} >
        <TouchableOpacity style={styles.button_00}
          >
        <Text style={styles.button_text_big}>{ this.props.name }</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_container} >
        <TouchableOpacity style={styles.button_0}
          >
        <Text style={styles.button_text}>Total: { this.props.total }</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_container} >
        <TouchableOpacity style={styles.button_1}
          >
        <Text style={styles.button_text_small}>Available: { this.props.available }</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button_container} >
        <TouchableOpacity style={styles.button_2}
          >
        <Text style={styles.button_text_small}>Unused: { this.props.unused }</Text>
        </TouchableOpacity>
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
});

export default RamText