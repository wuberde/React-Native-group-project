import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import ForgotPassword from '../screens/ForgotPassword'
import SigneOut from '../screens/Logout'
const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
    SigneOut:{ screen: SigneOut }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

export default AuthNavigation
