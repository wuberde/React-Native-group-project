import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Context from "../../context/Context";

export default class Login extends React.Component {
  
  static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
        email: '',
        password: '',
        };
}

componentDidUpdate(){
  if (this.context.user)  {
    this.props.navigation.navigate('App');
  }
}

//Login Button 
  onLogin() {

    const { email, password} = this.state;

    this.context.fetchLogin({
      email,
      password,
    })
    /* alert(this.state); */

  }

  //navigation to sing up and account recovery
  goToSignup = () => this.props.navigation.navigate('Signup');
  goForgotPassword = () => this.props.navigation.navigate('ForgotPassword');


  render() {

    return (
      <View style={styles.container}>
        
        <View style={styles.logo}>
        <Text style={styles.txtLogo}>
          EasyGoals
        </Text>
        </View>
        
          <TextInput
            style={styles.textInput}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder={'e-mail'}
          />
        
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.textInput}
          />
        
        <TouchableOpacity style={styles.btLogin} onPress={this.onLogin.bind(this)}>
        <Text style={styles.txtLogin}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btSignUp} onPress={this.goToSignup} >
        <Text style={styles.txtSignUp}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btForgotPassword} onPress={this.goForgotPassword} >
        <Text style={styles.txtForgotPassword}>Forgot your password?</Text>
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

  textInput:{
    fontSize:20,
    fontWeight:'bold',
    margin:20,
    height:50,
    backgroundColor:'#ffffff',
    paddingLeft:25,
    borderRadius:25,
  },

  btLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    borderRadius:28,
    backgroundColor: '#D753F6',
    height:55,
  },

  txtLogin:{
    fontWeight:'bold',
    fontSize:26,
    color:'#ffffff',
  },

  btSignUp: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },
  
  txtSignUp:{
    fontWeight:'bold',
    fontSize:22,
    color:'#FFFFFF',
  },

  btForgotPassword:{
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },

  txtForgotPassword:{
    fontSize:20,
    color:'#ffffff',
  },

});
