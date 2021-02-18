import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './MainStackNavigator.js';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
  },
  {
    initialRouteName: 'Auth',
  }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
