import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
export default class Card extends React.Component {
  render() {
    return (
      <Animatable.View
        animation={this.props.move}
        duration={1500}
        style={styles.cardone}
      >
        <TouchableOpacity style={styles.box1} onPress={this.props.screenchange}>
          <Text style={styles.toGoalSetting}>to Goal Setting</Text>
        </TouchableOpacity>
        <View style={styles.box2}>
          <Text style={styles.goalTitle}>{this.props.title}</Text>
        </View>
        <View style={styles.box3}>
          <View
            style={{
              height: '95%',
              width: '90%',
              backgroundColor: '#D753F6',
              borderRadius: 75,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              {this.props.completed}
            </Text>
          </View>
        </View>
      </Animatable.View>
    );
  }
}
const styles = StyleSheet.create({
  cardone: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* cardtwo: {
    flex: 1,
  }, */
  box1: {
    flex: 1,
    height: 80,
    backgroundColor: '#D753F6',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  toGoalSetting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 10,
    height: '100%',
  },
  box2: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box3: {
    flex: 1,
    height: 80,
  },
});
