import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DiskText extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} >
          Disk - Servidor { this.props.name }
        </Text>
      </View>
      <View >
        <Text style={styles.text} >
          Total: { this.props.total }
        </Text>
      </View>
      <View >
        <Text style={styles.text} >
          Available: { this.props.available }
        </Text>
      </View>
      <View >
        <Text style={styles.text} >
          Unused: { this.props.unused }
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 18,
  },
  button: {
    marginVertical: 5,
    width: '90%',
  }
});

export default DiskText