import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './login';
import MenuScreen from './menu';
import CreateAccount from './createAccount';
import ChatNuevo from './chatNuevo'
import ChatConversation from './chatConversation'

const RootNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  CreateAccount: {
    screen: CreateAccount
  },
  Menu: {
    screen: MenuScreen
  },
  ChatNuevo: {
    screen: ChatNuevo
  },
  ChatConversation: {
    screen: ChatConversation
  }
},
{
  headerMode: 'none'
})

export default createAppContainer(RootNavigator)
