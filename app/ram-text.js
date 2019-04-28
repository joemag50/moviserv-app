import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RamText extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} >
          RAM - Servidor { this.props.name }
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
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '100%',
        }}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
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
  text: {
    color: '#FFF',
    padding: 12,
    fontSize: 18,
  },
  button: {
    marginVertical: 5,
    width: '90%',
  }
});

export default RamText