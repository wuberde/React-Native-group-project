import { TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCalendarAlt,
  faCamera,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

export default class SetGoalPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title1}>Set Your Goal</Text>
        <View style={styles.box1}>
          <TextInput style={styles.textInputStyle} placeholder="Goal Title *" />
        </View>
        <View style={styles.box2}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="item description..."
          />
        </View>
        <View style={styles.box3}>
          <View style={{}}>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              size={50}
              color={'#fff'}
              marginRight={'3%'}
            />
          </View>
          <View style={styles.box3_2}>
            <Text style={styles.box3_2_Text}>From 20:40 10.10.2020</Text>
            <Text style={styles.box3_2_Text}>To 20:40 10.10.2021</Text>
          </View>
        </View>

        <View style={styles.box4}>
          <View>
            <FontAwesomeIcon
              style={styles.bellIconStyle}
              icon={faBell}
              size={30}
            />
          </View>
          <View>
            <Text style={styles.box4_Text}>Set Notifications</Text>
          </View>
        </View>

        <View style={styles.box5}>
          <View>
            <Text style={styles.box5_Text_1}>Daily: V</Text>
            <Text style={styles.box5_Text_2}>Weekly</Text>
            <Text style={styles.box5_Text_3}>Every hour</Text>
          </View>
        </View>
        <View style={styles.box6}>
          <View style={styles.cameraIcon}>
            {/* <FontAwesomeIcon icon={faCamera} size={50} color={'#fff'} /> */}
            <Image source={require('../../assets/smallCamera.png')} />
          </View>
          <View style={styles.box6_2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ImagePickerOn')}
            >
              <Text style={styles.button}>Add Photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            onPress={() => Alert.alert('Your data has been saved!')}
          >
            <Text style={styles.buttonStyle}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#6fabff',
    paddingTop: '7%',
    paddingLeft: '7%',
  },
  title1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  box1: {
    backgroundColor: '#fff',
    width: '93%',
    height: 50,
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: '5%',
    borderRadius: 25,
  },
  box2: {
    backgroundColor: '#fff',
    width: '93%',
    height: 100,
    marginBottom: '5%',
    marginTop: '5%',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
    borderRadius: 25,
  },
  box3: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '5%',
  },
  box3_2: { marginTop: '1%' },
  box3_2_Text: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 14,
  },
  boxThreeGroup: {
    flex: 1,
    flexDirection: 'column',
  },
  box4: {
    flex: 1,
    flexDirection: 'row',
  },
  box4_Text: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
    marginTop: 3,
  },
  box5: {},
  box5_Text_1: {
    width: '40%',
    height: 30,
    marginBottom: '2%',
    paddingTop: 3,
    paddingLeft: 5,
    color: '#fff',
    backgroundColor: '#85baff',
  },
  box5_Text_2: {
    width: '85%',
    height: 30,
    paddingTop: 3,
    paddingLeft: 5,
    color: '#fff',
    backgroundColor: '#85baff',
  },
  box5_Text_3: {
    width: '85%',
    height: 30,
    paddingTop: 3,
    paddingLeft: 5,
    color: '#fff',
    backgroundColor: '#85baff',
  },
  box6: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    marginBottom: '5%',
  },

  box6_Text: { fontSize: 14, color: '#fff' },
  cameraIcon: {
    marginTop: '3%',
  },
  cameraText: {
    color: '#fff',
  },
  button: {
    borderRadius: 50,
    padding: 5,
    color: '#fff',
    marginTop: '20%',
    marginLeft: '5%',
  },
  saveButtonContainer: {
    backgroundColor: '#b152fe',
    width: 100,
    borderRadius: 50,
    height: 50,
    borderWidth: 3,
    borderColor: '#fff',
    alignSelf: 'center',
  },
  buttonStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: '5%',
    textAlign: 'center',
  },
  footer: {
    height: 20,
  },
  textInputStyle: {
    height: 40,
    color: '#878687',
    fontSize: 18,
    color: '#b152fe',
  },
  bellIconStyle: {
    color: '#fff',
  },
});
