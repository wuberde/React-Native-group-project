import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native'
import Context from "../../context/Context";

export default class Signup extends React.Component {
  
  static contextType = Context; 
  
    constructor(props) {
    super(props); 
    this.state = { 
    userName: '',
    email: '',
    date: null, 
    dateOfBirth: '',
    favQuote: '',
    password: '',
    repeatPassword: '',
   };
  }

  // login page navigation link
  goToLogin = () => this.props.navigation.navigate('Login')  

  // date picker value check
  checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  }

  componentDidUpdate(){
    if (this.context.user)  {
      this.props.navigation.navigate('App');
    }
  }


  singUp = async () => {
    
    const { userName, email, favQuote, dateOfBirth, password, repeatPassword} = this.state;

    this.context.fetchSignUp({
      userName,
      email,
      dateOfBirth,
      favQuote,
      password,
    })
    /* alert(this.state); */

  };

//date picker handler
  dateTimeInputChangeHandler = (e) => {
    this.type = 'text';
    var input = e;
    var expr = new RegExp(/\D\/$/);
    if (expr.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[1]) values[1] = this.checkValue(values[1], 12);
    if (values[0]) values[0] = this.checkValue(values[0], 31);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + '/' : v;
    });
    this.setState({
      dateOfBirth: output.join('').substr(0, 14),
    });
  };


//sing up button


  render() {
   
    return (
      <View style={styles.container}>
              
        <View style={styles.logo}>
        <Text style={styles.txtLogo}>
          EasyGoals
        </Text>
        <Text style={styles.txtSingUp}>
          Sign Up
        </Text>
        </View>

          <TextInput
            value={this.state.userName}
            onChangeText={(userName) => this.setState({ userName })}
            placeholder={'Name*'}
            style={styles.textInput}
          />

          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder={'E-mail*'}
            style={styles.textInput}
            autoCapitalize="none"
          />

          <TextInput
          value={this.state.dateOfBirth}
          onChangeText={(e) => this.dateTimeInputChangeHandler(e)}
          placeholder={'Date of Birth: DD/MM/YYYY*'}
          keyboardType="number-pad"
          style={styles.textInput}
          maxLength={10}
          />

          <TextInput
            value={this.state.favQuote}
            onChangeText={(favQuote) => this.setState({ favQuote })}
            placeholder={'Your Favorite Quote*'}
            style={styles.textInput}
          />      

          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password*'}
            secureTextEntry={true}
            style={styles.textInput}
          />
        
          <TextInput
            value={this.state.repeatPassword}
            onChangeText={(repeatPassword) => this.setState({ repeatPassword })}
            placeholder={'Repeat Your Password*'}
            secureTextEntry={true}
            style={styles.textInput}
          />

        <TouchableOpacity style={styles.btSingUp} onPress={this.singUp.bind(this)}>
        <Text style={styles.txtBtSingUp}>Sign Up</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.btLogin} onPress={this.goToLogin} >
        <Text style={styles.txtLogin}>Log In</Text>
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

  txtSingUp:{
    color:'#F3F4F9',
    fontSize:35,
    fontWeight:'bold',
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

  btLogin: {
    color:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
  },

  txtLogin:{
    fontWeight:'bold',
    fontSize:22,
    color:'#F3F4F9',
  },

  btSingUp: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    borderRadius:28,
    backgroundColor: '#D753F6',
    height:55,
  },

  txtBtSingUp:{
    fontWeight:'bold',
    fontSize:26,
    color:'#ffffff',
  },

})