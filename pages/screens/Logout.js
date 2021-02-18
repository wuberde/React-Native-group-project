import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Context from "../../context/Context";
export default class LogoutScreen extends React.Component {
    static contextType = Context; 
    go = () => this.props.navigation.navigate('Login')
render() {

    return (
      <View style={styles.container}>

<View style={styles.logo}>
        <Text style={styles.txtLogo}>
          EasyGoals
        </Text>
        <Text style={styles.txtGoodbye}>
         Goodbye
        </Text>
        </View>
        
        <TouchableOpacity style={styles.btLogin} onPress={this.go} >
        <Text style={styles.txtLogin}>Log In</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    zIndex:30,
    marginTop:-100,
    justifyContent:'center',
    display:'flex',
    backgroundColor: '#5D39D7',
    height:'120%',
  },

  logo:{
    alignItems:'center',
    margin:20,
  },

  txtLogo:{
    color:'#FFFFFF',
    fontSize:50,
    fontWeight:'bold',
  },

  txtGoodbye:{
    marginTop:20,
    color:'#F3F4F9',
    fontSize:40,
    fontWeight:'bold',
  },



  btLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    borderRadius:28,
    backgroundColor: '#b154ff',
    height:55,
  },

  txtLogin:{
    fontWeight:'bold',
    fontSize:20,
    color:'#ffffff',
  },
});
