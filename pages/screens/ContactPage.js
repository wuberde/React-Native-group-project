import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


class ContactPage extends React.Component {
  constructor()
  {
    super();
    this.state={
        name:'',
        nameError:'',
        email:'',
        emailError:'',
        message:'',
        messageError:'',
    }
  }

  submit(){
    if (this.state.name=="")
    {
      this.setState({nameError:"Name is empty"})
    }
    else{
      this.setState({nameError:""})
    }
    
    if (this.state.email=="") {
      this.setState({emailError:"E-mail is empty"})
    }
    else{
      this.setState({emailError:""})
    }
    
    if (this.state.message=="") {
      this.setState({messageError:"Message is empty"})
    }
    else{
      this.setState({messageError:""})
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.titlePage}>Contact Us</Text>
        </View>

        {/* <Text style={styles.txtContacUs}>We happy to hear you</Text> */}

        <TextInput
          placeholder="Name:"
          onChangeText={(text) => {this.setState({name: text})}}
          style={styles.textInput}
        />
        <Text style={styles.txtError}>{this.state.nameError}</Text>

        <TextInput
          placeholder="E-mail:"
          onChangeText={(text) => {this.setState({email: text})}}
          style={styles.textInput}
        />
        <Text style={styles.txtError}>{this.state.emailError}</Text>
        
        <TextInput
        numberOfLines={5}
          placeholder="Messege:"
          onChangeText={(text) => {this.setState({message: text})}}
          style={styles.textInputMultLine}
        />

        <Text style={styles.txtError}>{this.state.messageError}</Text>
        
        <TouchableOpacity style={styles.btSub} onPress={()=>{this.submit()}}>
        <Text style={styles.txtSubmit}>Submit</Text>
        </TouchableOpacity>

{/*     <View style={styles.btSub}>
        <Button title="Clear" onPress={()=>{this.clear()}}/>
        </View> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#5D39D7',
    padding:20,
    height:'100%',
  },

  titlePage: {
    marginBottom:20,
    color:'#ffffff',
    fontSize:30,
    fontWeight:'bold',
  },

  txtContacUs: {
    marginTop:10,
    marginBottom:15,
    fontSize:20,
    color:'#ffffff'
  },

  textInput: {
    color:'#6ebcff',
    height:40,
    backgroundColor: '#ffffff',
    paddingLeft:10,
    borderRadius:20,
  },

  textInputMultLine: {
    minHeight:40,
    textAlignVertical:'top',
    paddingTop:10,
    backgroundColor: '#ffffff',
    paddingLeft:10,
    borderRadius:20,
  },

  btSub: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
    borderRadius:20,
    backgroundColor: '#D753F6',
    height:50,
  },

  txtSubmit:{
    fontWeight:'bold',
    fontSize:20,
    color:'#ffffff',
  },

  txtError: {
    marginTop:4,
    marginBottom:10,
    marginLeft:10,
    color:'#ffffff',
  },

});

export default ContactPage;
