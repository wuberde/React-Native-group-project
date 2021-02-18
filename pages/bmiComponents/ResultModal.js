import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from './Button';
import { BOX, TEXT } from './style';

const GOOD_STATUS_COLOR = '#7ac79d';
const BAD_STATUS_COLOR = '#ffb81c';

function ResultModal({
  modalVisible,
  bmiPoint,
  bmiStatus,
  bmiInterpretation,
  onModalConfirm,
}) {
  return (
    // https://reactnative.dev/docs/modal
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.headerText}>Your Result</Text>

          <View style={styles.contentBox}>
            <Text
              style={[
                styles.bmiStatusText,
                {
                  color:
                    bmiStatus === 'NORMAL'
                      ? GOOD_STATUS_COLOR
                      : BAD_STATUS_COLOR,
                },
              ]}
            >
              {bmiStatus}
            </Text>

            <Text style={styles.bmiPointText}>{bmiPoint}</Text>

            <Text style={styles.bmiInterpretationText}>
              {bmiInterpretation}
            </Text>
          </View>

          {/* button section -starts */}
          <View style={styles.buttonSection}>
            <TouchableOpacity title="RE-CALCULATE" onPress={onModalConfirm}>
              <Text style={styles.buttonText}>RE-CALCULATE</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.buttonSection}>
            <TouchableOpacity
              onPress={calculate}
              style={styles.appButtonContainer}
            >
              <Text style={styles.buttonText}>CALCULATE</Text>
            </TouchableOpacity>
          </View> */}
          {/* button section -ends */}
        </View>
      </SafeAreaView>
    </Modal>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  contentBox: {
    ...BOX,
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  bmiStatusText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: 'bold',
  },
  bmiPointText: {
    ...TEXT,
    fontSize: 70,
    fontWeight: 'bold',
  },
  bmiInterpretationText: {
    ...TEXT,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '500',
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

export default React.memo(ResultModal);
