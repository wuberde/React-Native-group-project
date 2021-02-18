import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import Scroll from "../user/scroll";
import Support from "../user/support";
import Context from "../../context/Context";

export default class Mission extends React.Component {
  static contextType = Context;

  

  render() {
   
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ width: "100%", height: "120%" }}
        >
          <View style={styles.header}>
            <Text style={styles.inline}>My Mission</Text>
          </View>
          <View style={styles.memos}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ width: "200%" }}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                horizontal={true}
                data={this.context.goals}
                renderItem={({ item }) => (
                  <Scroll
                    bgcolor={item.bgcolor}
                    title={item.title}
                    description={item.description}
                    startDate="2021-02-25"
                    endDate="2021-02-28"
                  />
                )}
              />
            </ScrollView>
          </View>
          <View style={styles.supportview}>
            <Text style={styles.support}>Support</Text>
          </View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1500}
            style={[
              styles.rectangleone,
              {
                shadowOffset: { width: 100, height: 100 },
                shadowColor: "rgba(138, 149, 158, 0.2)",
                shadowOpacity: 1,
                elevation: 30,
                backgroundColor: "#FFFFFF",
              },
            ]}
          >
            <Support title="Daily Exercise" subtitle="Difficulty on insensible" />
          </Animatable.View>
          <Animatable.View
            animation="fadeInRight"
            duration={1500}
            style={[styles.rectangleone, { top: 580, backgroundColor: "#F4F9FC" }]}
          >
            <Support title="Balanced Diet" subtitle="Occasional Preference fast" />
          </Animatable.View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1500}
            style={[styles.rectangleone, { top: 690, backgroundColor: "#F4F9FC" }]}
          >
            <Support title="Sports and Yoga" subtitle="Services securing health ..." />
          </Animatable.View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F9",
  },
  header: {
    flex: 1,
    left: 25,
    top: 25,
  },
  inline: {
    
    fontSize: 25,
    letterSpacing: -0.5,
    fontWeight: "bold",
    color: "#D753F6",
  },
  memos: {
    height: 250,
    position: "absolute",
    top: 70,
    width: "100%",
    marginLeft: 10,
  },
  supportview: {
    position: "absolute",
    left: 25,
    top: 350,
  },
  support: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: -0.5,
    color: "#D753F6",
  },
  rectangleone: {
    height: 85,
    width: 300,
    position: "absolute",
    alignSelf: "center",
    top: 400,
    borderRadius: 18,
  },
});
