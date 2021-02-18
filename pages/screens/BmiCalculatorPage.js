import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
/* import GenderSelection from './components/GenderSelection'; */
import HeightSelection from '../bmiComponents/HeightSelection';
import UnitSelection from '../bmiComponents/UnitSelection';
import Button from '../bmiComponents/Button';
import ResultModal from '../bmiComponents/ResultModal';
import { ROW, CENTER, TEXT } from '../bmiComponents/style';
import {
  DEFAULT_VALUE,
  MAX_AGE,
  MAX_WEIGHT,
  MIN_AGE,
  MIN_WEIGHT,
} from '../bmiComponents/const';

export default function BmiCalculatorPage() {
  /* const [gender, setGender] = useState(DEFAULT_VALUE.gender); */
  const [height, setHeight] = useState(DEFAULT_VALUE.height);
  const [weight, setWeight] = useState(DEFAULT_VALUE.weight);
  const [age, setAge] = useState(DEFAULT_VALUE.age);
  const [bmiPoint, setBmiPoint] = useState(0);
  const [bmiStatus, setBmiStatus] = useState('NORMAL');
  const [bmiInterpretation, setBmiInterpretation] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const calculate = () => {
    const point = weight / (height / 100) ** 2;

    if (point < 18.5) {
      setBmiStatus('UNDERWEIGHT!!');
      setBmiInterpretation(
        'You have a lower than normal body weight.\nTry to eat more.'
      );
    } else if (point < 25) {
      setBmiStatus('NORMAL');
      setBmiInterpretation('You have a normal body weight.\nGood job!');
    } else {
      setBmiStatus('OVERWEIGHT!!');
      setBmiInterpretation(
        'You have a higher than normal body weight.\nTry to exercise more.'
      );
    }

    setBmiPoint(point.toFixed(2));
    setModalVisible(true);
  };

  const reset = () => {
    /* setGender(DEFAULT_VALUE.gender); */
    setHeight(DEFAULT_VALUE.height);
    setWeight(DEFAULT_VALUE.weight);
    setAge(DEFAULT_VALUE.age);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>BMI Calculator</Text>
        {/* 
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header1}>
          <Text style={styles.headerText1}>BMI CALCULATOR</Text> */}
        {/* </View> */}
        {/* </View> */}

        <HeightSelection
          style={styles.section}
          height={height}
          setHeight={setHeight}
        />

        <View style={styles.section}>
          <View style={styles.weightAndAgeSelection}>
            <UnitSelection
              label="WEIGHT"
              value={weight}
              minValue={MIN_WEIGHT}
              maxValue={MAX_WEIGHT}
              setValue={setWeight}
            />
            <UnitSelection
              label="AGE"
              value={age}
              minValue={MIN_AGE}
              maxValue={MAX_AGE}
              setValue={setAge}
            />
          </View>
        </View>

        {/* button section */}
        {/* <Button title="CALCULATE" onPress={calculate} />  // this is the default button*/}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            onPress={calculate}
            style={styles.appButtonContainer}
          >
            <Text style={styles.buttonText}>CALCULATE</Text>
          </TouchableOpacity>
        </View>
        {/* button ends */}

        <ResultModal
          modalVisible={modalVisible}
          bmiPoint={bmiPoint}
          bmiStatus={bmiStatus}
          bmiInterpretation={bmiInterpretation}
          onModalConfirm={reset}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85baff', //light blue //'#1d2236' previous color
  },
  content: {
    flex: 1,
    padding: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  /* container: {
    flex: 1,
    backgroundColor: '#b0d1f0', //lightblue
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20, //change
    paddingVertical: 10,
    marginTop: 10, //added
    marginBottom: 10, // added
  }, */
  /* header: {
    ...CENTER,
    height: 70,
    /* borderBottomWidth: 5,
    borderBottomColor: '#7804cc', darkest purple 
    backgroundColor: '#7804cc', 
  }, */
  /* headerText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', //purple
  },
  headerText1: {
    ...TEXT,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7804cc', //purple
  }, */
  section: {
    flex: 2 / 3,
    marginVertical: 5,
  },
  /* genderSelection: {
    ...ROW,
    marginHorizontal: -10,
  }, */
  weightAndAgeSelection: {
    ...ROW,
    marginHorizontal: -10,
  },
  buttonSection: {
    flex: 0.18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b152fe',
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    paddingTop: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    paddingTop: 10,
    marginRight: 10,
  },
});
