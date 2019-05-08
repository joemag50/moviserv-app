import React from 'react';
import { StyleSheet, Text,
         View, Image,
         KeyboardAvoidingView } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import MonitorRam from './monitorRam'
import MonitorDisk from './monitorDisk'
import MonitorTasks from './monitorTasks'
import MonitorReboot from './monitorReboot'
import MonitorDataBase from './monitorDataBase'
import CreateServer from './createServer'
import HomeScreen from './homescreen'
import Settings from './settings'
import ChatMenu from './chatMenu'

class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppDrawerNavigation />
    );
  }
}

const DrawerNavigatorConfig = {
  drawerType: "back",
  useNativeAnimations: false,
};

const AppDrawerNavigation = createDrawerNavigator({
  Home: HomeScreen,
  ChatMenu: ChatMenu,
  Ram: MonitorRam,
  Disk: MonitorDisk,
  Tasks: MonitorTasks,
  DataBases: MonitorDataBase,
  CreateServer: CreateServer,
  Reboot: MonitorReboot,
  Settings: Settings,
}, DrawerNavigatorConfig);

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
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    // paddingVertical: 5,
    paddingHorizontal: 15,
    width: '90%',
  },
  button: {
    marginVertical: 5,
    width: '90%',
  }
});

export default createAppContainer(AppDrawerNavigation)