import React, { useCallback, useRef, useEffect } from "react";
import { Alert, Animated, Linking, StyleSheet, Text, Image, ScrollView, View, TouchableOpacity} from 'react-native';
import { withSafeAreaInsets } from "react-native-safe-area-context";


//animation
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 100,
        duration: 2000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}
//end animation

// external hiperlinks 
const linkedinEdgar = "https://www.linkedin.com/in/edgar-weckelmann-gandolfi/";
const githubEdgar = "https://github.com/ewecke/easygoals";

const OpenURLText = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <TouchableOpacity onPress={handlePress}><Text style={styles.txtLinks}>{children}</Text></TouchableOpacity>;
};
// end external hiperlinks 

class AboutPage extends React.Component {
  render() {
    return (

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.titleAboutUs}>About Us</Text>
        <Text style={styles.txtAboutUs}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar, quam at vestibulum maximus, nunc nibh laoreet orci, non dapibus mauris dui quis velit. Proin laoreet sapien eget justo vehicula porttitor. Morbi condimentum augue eu leo dictum, sit amet dapibus quam lacinia. Aliquam tempor ex vel lorem egestas lacinia. Curabitur at eros sit amet ex ultrices aliquet ac non risus. Donec finibus maximus sem, vitae tempus turpis tincidunt ut. Fusce sed massa vitae eros vestibulum imperdiet.</Text>
        <Text style={styles.titleAboutUs}>Team Members</Text>
        
        <FadeInView style={styles.squadCard}>  
        <View style={styles.squadCardLR}>
          <View style={styles.squadCardL}>
            <Image style={styles.profilePhoto} source={require("../../assets/profile_1.jpg")}/>
          </View>
          <View style={styles.squadCardR}>
            <Text style={styles.txtName}>Edgar Gandolfi</Text>
            <Text style={styles.txtAboutUs}>UI/UX</Text>
            <Text style={styles.txtAboutUs}>Front End</Text>
            <Text style={styles.txtAboutUs}>Back End</Text>
            <Text style={styles.txtAboutUs}>Presentation</Text>
          </View>
          </View>
          <View style={styles.socialbar}>
            <OpenURLText url={linkedinEdgar}>LinkedIn</OpenURLText>
            <OpenURLText url={githubEdgar}>GitHub</OpenURLText>
          </View>
        </FadeInView>
        
        <FadeInView style={styles.squadCard}>  
        <View style={styles.squadCardLR}>
          <View style={styles.squadCardL}>
            <Image style={styles.profilePhoto} source={require("../../assets/profile_1.jpg")}/>
          </View>
          <View style={styles.squadCardR}>
            <Text style={styles.txtName}>Natia Meskhi</Text>           
            <Text style={styles.txtAboutUs}>UI/UX</Text>
            <Text style={styles.txtAboutUs}>Front End</Text>
            <Text style={styles.txtAboutUs}>Back End</Text>
            <Text style={styles.txtAboutUs}>Presentation</Text>
          </View>
          </View>
          <View style={styles.socialbar}>
            <OpenURLText url={linkedinEdgar}>LinkedIn</OpenURLText>
            <OpenURLText url={githubEdgar}>GitHub</OpenURLText>
          </View>
        </FadeInView>

        <FadeInView style={styles.squadCard}>  
        <View style={styles.squadCardLR}>
          <View style={styles.squadCardL}>
            <Image style={styles.profilePhoto} source={require("../../assets/profile_1.jpg")}/>
          </View>
          <View style={styles.squadCardR}>
            <Text style={styles.txtName}>Pei-Ling</Text>           
            <Text style={styles.txtAboutUs}>UI/UX</Text>
            <Text style={styles.txtAboutUs}>Front End</Text>
            <Text style={styles.txtAboutUs}>Back End</Text>
            <Text style={styles.txtAboutUs}>Presentation</Text>
          </View>
          </View>
          <View style={styles.socialbar}>
            <OpenURLText url={linkedinEdgar}>LinkedIn</OpenURLText>
            <OpenURLText url={githubEdgar}>GitHub</OpenURLText>
          </View>
        </FadeInView>

        <FadeInView style={styles.squadCard}>  
        <View style={styles.squadCardLR}>
          <View style={styles.squadCardL}>
            <Image style={styles.profilePhoto} source={require("../../assets/profile_1.jpg")}/>
          </View>
          <View style={styles.squadCardR}>
            <Text style={styles.txtName}>Raquel Dionisio</Text>           
            <Text style={styles.txtAboutUs}>UI/UX</Text>
            <Text style={styles.txtAboutUs}>Front End</Text>
            <Text style={styles.txtAboutUs}>Back End</Text>
            <Text style={styles.txtAboutUs}>Presentation</Text>
          </View>
          </View>
          <View style={styles.socialbar}>
            <OpenURLText url={linkedinEdgar}>LinkedIn</OpenURLText>
            <OpenURLText url={githubEdgar}>GitHub</OpenURLText>
          </View>
        </FadeInView>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex:1,
        backgroundColor: '#5D39D7',
  },
  
  squadCard:{
    backgroundColor: '#D753F6',
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    borderRadius:25,
   },

  socialbar:{
    padding:10,
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#252525',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },

  squadCardLR:{
    display:'flex',
    flexDirection:'row',
  },

  txtName:{
    marginTop:10,
    marginLeft:20,
    marginBottom:4,
    color:'#ffffff',
    fontSize:20,
    fontWeight:'bold',
  },

  txtAboutUs: {
    color:'#ffffff',
    marginLeft:20,
    marginRight:20,
  },

  titleAboutUs: {
    color:'#ffffff',
    fontSize:30,
    fontWeight:'bold',
    marginLeft:20,
    marginTop:20,
  },

  profilePhoto: {
    marginTop:15,
    marginLeft:15,
    marginBottom:15,
    width: 100,
    height:100,
    alignItems: 'center',
    borderRadius:100,
  },

  txtLinks:{
    textDecorationLine:'underline',
    color:'#ffffff',
    marginLeft: 20,
  },

  button: {
    backgroundColor: '#161737',
    borderRadius: 20,
    padding: 10,
    color: '#fff',
    marginBottom: 20,
  },
});

export default AboutPage;
