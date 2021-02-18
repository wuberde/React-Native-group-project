import { TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCalendarAlt,
  faCamera,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import DatePikerPage from '../screens/DatePikerPage.js';
import Context from '../../context/Context';

export default class SetGoalPage extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      bgcolor: '#FFBE86',
      startDate: '2021-02-25',
      endDate: '2021-02-28',
    };
  }
  addGoal = () => {
    console.log(this.state);

    const { title, description, bgcolor, startDate, endDate } = this.state;

    this.context.fetchSetGoal({
      title,
      description,
      bgcolor,
      startDate,
      endDate,
      progress: '1%',
    });
    this.props.navigation.navigate('Mission');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title1}>Set Your Goal</Text>
        <View style={styles.box1}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Goal title*"
            value={this.state.title}
            onChangeText={(title) => this.setState({ title })}
          />
        </View>

        <View style={styles.box2}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Item description"
            value={this.state.description}
            onChangeText={(description) => this.setState({ description })}
          />
        </View>
        <View style={styles.box3to6}>
          <View style={styles.box3}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DatePikerPage')}
            >
              <View style={{}}>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  size={50}
                  color={'#fff'}
                  marginRight={'3%'}
                />
              </View>
            </TouchableOpacity>
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
                size={40}
              />
            </View>
            <View>
              <Text style={styles.box4_Text}>Set Notifications</Text>
            </View>
          </View>

          <View style={styles.box5}>
            <View>
              <Text style={styles.box5_Text_1}>Daily</Text>
              <Text style={styles.box5_Text_2}>Weekly</Text>
              <Text style={styles.box5_Text_3}>Every hour</Text>
            </View>
          </View>
          <View style={styles.box6}>
            <View style={styles.cameraIcon}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ImagePickerOn')}
              >
                <FontAwesomeIcon icon={faCamera} size={50} color={'#fff'} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>

        <View style={styles.saveButtonContainer}>
          <TouchableOpacity onPress={this.addGoal}>
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
    backgroundColor: '#5D39D7',
    paddingTop: '7%',
    paddingLeft: '7%',
  },
  title1: {
    color: '#fff',
    fontSize: 30,
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
  box3to6: {
    flex: 1,
    flexDirection: 'column',
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
    fontSize: 20,
  },
  box4: {
    flex: 1,
    flexDirection: 'row',
  },
  box4_Text: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 3,
  },
  box5: { flex: 1 },
  box5_Text_1: {
    fontSize: 20,
    width: '40%',
    height: 30,
    marginBottom: '2%',
    paddingTop: 3,
    paddingLeft: 5,
    color: '#fff',
    backgroundColor: '#D753F6',
  },
  box5_Text_2: {
    fontSize: 20,
    width: '85%',
    height: 30,
    paddingTop: 3,
    paddingLeft: 5,
    color: '#fff',
    backgroundColor: '#D753F6',
  },
  box5_Text_3: {
    fontSize: 20,
    width: '85%',
    height: 30,
    paddingTop: 3,
    paddingLeft: 5,
    color: '#fff',
    backgroundColor: '#D753F6',
  },
  box6: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    marginBottom: '5%',
  },
  cameraIcon: {
    /*  marginTop: '3%', */
  },
  addPhoto: {
    borderRadius: 50,
    paddingTop: 25,
    paddingLeft: 15,
    color: '#fff',
  },
  saveButtonContainer: {
    backgroundColor: '#5D39D7',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 20,
  },
  textInputStyle: {
    height: 40,
    color: '#5D39D7',
    fontSize: 20,
  },
  bellIconStyle: {
    color: '#fff',
  },
});
