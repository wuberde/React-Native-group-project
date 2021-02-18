import React from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    state = {
      email: '',
    };
  
    handleEmailChange = (email) => {
      this.setState({ email });
    };
  
    goToLogin = () => this.props.navigation.navigate('Login')
  
    goToAcountRecovery = () => this.props.navigation.navigate('AcountRecovery');

    goToAcountRecovery = async () => {
        const { email } = this.state;
        try {
          if (email.length > 0) {
            this.props.navigation.navigate('App');
          }
        } catch (error) {
          alert(error);
        }
      };
    
    render() {
      const { email } = this.state;
  
      return (
        <View style={styles.container}>
          
          <View style={styles.logo}>
          <Text style={styles.txtLogo}>
            EasyGoals
          </Text>
          </View>
            
            <TextInput
              style={styles.textInput}
              name="email"
              value={email}
              placeholder="E-mail"
              autoCapitalize="none"
              onChangeText={this.handleEmailChange}
            />
          
          <TouchableOpacity style={styles.btARecovery} onPress={this.goToAcountRecovery}>
          <Text style={styles.txtARecovery}>Acount Recovery</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.btLogin} onPress={this.goToLogin} >
          <Text style={styles.txtLogin}>Go to Login</Text>
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
      color:'#770bd3',
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
  
    btARecovery: {
      alignItems: 'center',
      justifyContent: 'center',
      margin:20,
      borderRadius:28,
      backgroundColor: '#b154ff',
      height:55,
    },
  
    txtARecovery:{
      fontWeight:'bold',
      fontSize:20,
      color:'#ffffff',
    },
  
   btForgotPassword:{
      color:'#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      margin:20,
    },
  
    txtForgotPassword:{
      fontSize:20,
      color:'#555555',
    },

    btLogin: {
      
        alignItems: 'center',
        justifyContent: 'center',
        margin:20,
        borderRadius:28,
      },
    
      txtLogin:{
        color:'#FFFFFF',
        fontSize:25,
      },
  
  });
  