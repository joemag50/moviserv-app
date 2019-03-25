import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './login';
import MenuScreen from './menu';

const RootNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  Menu: {
    screen: MenuScreen
  }
},
{
  headerMode: 'none'
})

export default createAppContainer(RootNavigator)
