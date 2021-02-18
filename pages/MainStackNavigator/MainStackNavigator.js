import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import Mission from '../screens/mission';
import UserPage from '../screens/UserPage';
import AboutPage from '../screens/AboutPage';
import ContactPage from '../screens/ContactPage';
import SettingsPage from '../screens/SettingsPage'; // import Settings Page
import ImagePickerOn from '../screens/ImagePickerOn'; //natia code
import SetGoalPage from '../screens/SetGoalPage';
import BmiCalculatorPage from '../screens/BmiCalculatorPage'; //pei-ling
import DatePikerPage from '../screens/DatePikerPage';
// Import Custom idebar
import CustomSidebarMenu from './CustomSidebarMenu';
import LogoutScreen from '../screens/Logout';
import Login from '../screens/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: 'https://img.icons8.com/clouds/100/000000/visible--v2.png',
          }}
          style={{ width: 60, height: 60, marginLeft: 10, marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function userScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="UserPage">
      <Stack.Screen
        name="UserPage"
        component={UserPage}
        options={{
          title: 'UserPage', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="ImagePickerOn"
        component={ImagePickerOn}
        options={{
          title: 'Goal App', //Set Header Title by natia
        }}
      />

      <Stack.Screen
        name="SetGoalPage"
        component={SetGoalPage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />

      {/* pei-ling---starts */}
      <Stack.Screen
        name="BmiCalculatorPage"
        component={BmiCalculatorPage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />
      {/* pei-ling---ends */}

      <Stack.Screen
        name="DatePikerPage"
        component={DatePikerPage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function DatePikerScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="DatePikerPage">
      <Stack.Screen
        name="DatePikerPage"
        component={DatePikerPage}
        options={{
          title: 'DatePikerPage', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

//

function LogoutScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="LogoutScreen">
      <Stack.Screen
        name="LogoutScreen "
        component={LogoutScreen}
        options={{
          title: 'Sign out ', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

////

function SetGoalScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SetGoalPage">
      <Stack.Screen
        name="SetGoalPage"
        component={SetGoalPage}
        options={{
          title: 'SetGoalPage', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

// pei-ling code
function BmiCalculatorScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="BmiCalculatorPage">
      <Stack.Screen
        name="BmiCalculatorPage"
        component={BmiCalculatorPage}
        options={{
          title: 'BmiCalculatorPage', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

///natia code
function ImagePickerOnScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ImagePickerOn">
      <Stack.Screen
        name="ImagePickerOn"
        component={ImagePickerOn}
        options={{
          title: 'ImagePickerOn', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function missionScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Mission">
      <Stack.Screen
        name="Mission"
        component={Mission}
        options={{
          title: 'EASY GOALS', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F3F4F9', //Set Header color
          },
          headerTintColor: '#5D39D7', //Set Header text color
          headerTitleStyle: {
            fontWeight: ' 1000', //Set Header text style

            fontSize: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function contactScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ContactPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#4b0082', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="ContactPage"
        component={ContactPage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function aboutScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AboutPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#4b0082', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="AboutPage"
        component={AboutPage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function settingsPageScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SettingsPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#4b0082', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          title: 'EasyGoals', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#F3F4F9',
          fontWeight: ' 200',
          fontSize: 30,
          itemStyle: { marginVertical: 10 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="UserPage"
          options={{
            drawerLabel: 'User',
            drawerIcon: ({}) => (
              <Feather name="user" size={30} color={'#F3F4F9'} />
            ),
          }}
          component={userScreenStack}
        />

        <Drawer.Screen
          name="Mission"
          options={{
            drawerLabel: 'Mission',
            drawerIcon: ({ tintColor }) => (
              <Feather name="target" size={30} color={'#F3F4F9'} />
            ),
          }}
          component={missionScreenStack}
        />

        {/* */}
        <Drawer.Screen
          name="ContactPage"
          options={{
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor }) => (
              <Feather name="message-square" size={30} color={'#F3F4F9'} />
            ),
          }}
          component={contactScreenStack}
        />

        <Drawer.Screen
          name="AboutPage"
          options={{
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) => (
              <Feather name="users" size={30} color={'#F3F4F9'} />
            ),
          }}
          component={aboutScreenStack}
        />

        <Drawer.Screen
          name="SettingsPage"
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ tintColor }) => (
              <Feather name="settings" size={30} color={'#F3F4F9'} />
            ),
          }}
          component={settingsPageScreenStack}
        />

        <Drawer.Screen
          name="LogoutScreen"
          options={{
            drawerLabel: 'Sign out ',

            drawerIcon: ({ tintColor }) => (
              <Feather name="log-out" size={30} color={'#F3F4F9'} />
            ),
          }}
          component={LogoutScreenStack}
        />

        {/*  */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
