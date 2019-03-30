import React from 'react';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Image style={styles.image} source={require('../assets/logo.jpeg')} />
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
  image: {
    flex: 3,
    width: 300,
    resizeMode: 'contain'
  },
});

export default HomeScreen