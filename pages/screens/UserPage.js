import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import Card from '../user/card';
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencilAlt, faWeight } from '@fortawesome/free-solid-svg-icons';
import Context from '../../context/Context';

//FirstPage

export default class UserPage extends React.Component {
  // context reades data from context and make avalible on this.context
  static contextType = Context;

  state = {
    color: '#136DF3',
    activestate: 'rgba(255, 255, 255, 0.291821)',
  };
  change = () => {
    return this.props.navigation.navigate('Mission');
  };

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.emptyContainer}></View>
        <View style={styles.container1}>
          <View style={styles.box1}>
            <View style={styles.userInfoSection}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ImagePickerOn')}
              >
                <Image
                  style={styles.avatar}
                  source={{
                    uri:
                      'https://static.toiimg.com/thumb/msid-76729750,width-640,resizemode-4/76729750.jpg',
                  }}
                />
              </TouchableOpacity>
              <View style={styles.usernameAndQuote}>
                <Text style={styles.name}>
                  Hi, {this.context.user.userName}
                </Text>
                <Text style={styles.subtitle}>
                  {this.context.user.favQuote}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.buttonSetGoal}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SetGoalPage')}
              >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.textSetGoal}>Set your goal</Text>
                  <FontAwesomeIcon
                    style={styles.iconPencil}
                    icon={faPencilAlt}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Button to BMI Calculator */}
          <View style={styles.box2}>
            <View style={styles.buttonCheckBMI}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('BmiCalculatorPage')
                } //'SetGoalPage' should be changed to BmiCalculatorPage
              >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.textSetGoal}>Check your BMI?</Text>
                  <FontAwesomeIcon
                    style={styles.iconFaWeight}
                    icon={faWeight}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          {/* <View style={styles.line}></View> */}
          <View style={styles.progress}>
            <Text style={styles.textone}>My Progress</Text>
          </View>
          <View style={styles.cards}>
            {this.context.goals.map((goal) => (
              <Card
                style={styles.cardText}
                move="bounceInLeft"
                title={goal.title}
                /* subtitle="85% Completed" */
                completed={goal.progress}
                screenchange={() => this.change()}
              />
            ))}

            {/* <Card
              style={styles.cardText}
              move="bounceInRight"
              title="Goal Title"
              completed="75%"
              screenchange={() => this.change()}
            />
            <Card
              style={styles.cardText}
              move="bounceInLeft"
              title="Goal Title"
              completed="80%"
              screenchange={() => this.change()}
            /> */}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  /* emptyContainer: {
    height: 10,
  }, */
  container1: {
    flex: 1.3,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  box1: {
    flex: 2,
  },
  userInfoSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameAndQuote: {
    flex: 1,
    flexDirection: 'column',
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 85 / 2,
    marginRight: 15,
  },
  box2: {
    flex: 1.2,
    flexDirection: 'row',
  },
  container2: {
    flex: 1.5,
    backgroundColor: '#5D39D7',
    /* borderTopRightRadius: 60, */
    borderTopLeftRadius: 60,
  },
  inputView: {
    backgroundColor: '#b152fe',
    width: '90%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: '15%',
    marginLeft: '5%',
    borderColor: 'white',
    borderWidth: 4,
  },
  placeHolderText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '20%',
  },
  /* boxfour: {
    flex: 0.5,
    color: '#fff',
    flexDirection: 'row',
  }, */
  name: {
    fontSize: 28,
    color: '#5D39D7',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#5D39D7',
  },
  buttonSetGoal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5D39D7',
    height: 50,
    borderRadius: 50,
    /* borderWidth: 3,
    borderColor: '#fff', */
  },
  buttonCheckBMI: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D753F6',
    height: 50,
    borderRadius: 50,
    /* borderWidth: 3,
    borderColor: '#fff', */
  },
  textSetGoal: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    marginRight: 10,
  },
  iconPencil: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  iconFaWeight: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  progress: {
    marginTop: '10%',
    marginBottom: '5%',
    left: 50,
  },
  textone: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: -0.5,
  },
  cards: {
    flex: 1,
    flexDirection: 'column',
    /* alignItems: 'center', */
    marginTop: 10,
    /* marginHorizontal: 10, */
    marginLeft: 10,
    height: '90%',
  },
  cardText: {
    flex: 1,
    /* 
    alignSelf: 'center', */
  },
});

/* let openSetGoalPage=() => this.props.navigation.navigate('SetGoalPage') */
