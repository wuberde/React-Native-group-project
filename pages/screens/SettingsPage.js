import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Context from "../../context/Context";

export default class SettingsPage extends React.Component {
  
  static contextType = Context;

    constructor(props) {
      super(props); 
      this.state = { 
      userName: '',
      favQuote: '',
    };
    }



// save Button
  saveBt = async () => {

    const { userName, favQuote, } = this.state;

    this.context.fetchSaveSettings({
      userName,
      favQuote,
    })
 
    alert("Your settings has ben saved");
 
  };


  render() {

    return (
      <View style={styles.container}>
              
        <View style={styles.logo}>
        <Text style={styles.txtLogo}>
          EasyGoals
        </Text>
        <Text style={styles.txtSettings}>
        Settings
        </Text>
        </View>
          
          <Text style={styles.textSettings}>Name</Text>

          <TextInput
            value={this.state.userName}
            onChangeText={(userName) => this.setState({ userName })}
            placeholder={this.context.user.userName}
            style={styles.textInput}
          />

          <Text style={styles.textSettings}>Your Favorite Quote:</Text>

          <TextInput
            value={this.state.favQuote}
            onChangeText={(favQuote) => this.setState({ favQuote })}
            placeholder={this.context.user.favQuote}
            style={styles.textInput}
          />    


        <TouchableOpacity style={styles.btSave} onPress={this.saveBt.bind(this)}>
        <Text style={styles.txtBtSave}>Save Settings</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    display:'flex',
    backgroundColor: '#5D39D7',
    height:'100%',
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

  txtSettings:{
    color:'#F3F4F9',
    fontSize:35,
    fontWeight:'bold',
  },

  textSettings:{
    marginTop:15,
    fontSize:20,
    marginLeft:30,
    color:'#F3F4F9',
  },

  textInput:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    height:50,
    backgroundColor:'#ffffff',
    paddingLeft:25,
    borderRadius:25,
  },

  btSave: {
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:28,
    backgroundColor: '#b154ff',
    height:55,
  },

  txtBtSave:{
    fontWeight:'bold',
    fontSize:25,
    color:'#ffffff',

  },


})