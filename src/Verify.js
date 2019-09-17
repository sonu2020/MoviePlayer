/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      four: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowleft" color="black" size={30} />
          </TouchableOpacity>
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              marginLeft: 120,
            }}>
            <Text style={styles.Hdng}>Verify</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            marginLeft: 15,
            marginTop: 20,
          }}>
          <Text style={styles.Txt}>Verify your number</Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 50,
            marginLeft: 15,
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.A}>A dight code sent to</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.B}>+94 52459245522</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            numberOfLines={1}
            maxLength={1}
            style={{
              flex: 1,
              margin: 10,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 8,
            }}></TextInput>
          <TextInput
            numberOfLines={1}
            maxLength={1}
            style={{
              flex: 1,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 8,
              margin: 10,
            }}></TextInput>
          <TextInput
            numberOfLines={1}
            maxLength={1}
            style={{
              flex: 1,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 8,
              margin: 10,
            }}></TextInput>
          <TextInput
            numberOfLines={1}
            maxLength={1}
            style={{
              flex: 1,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 8,
              margin: 10,
            }}></TextInput>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            marginLeft: 15,
          }}>
          <View style={{flex: 2, marginTop: 3}}>
            <Text style={styles.Y}>Resend in : </Text>
          </View>
          <View style={{flex: 8}}>
            <Text style={styles.M}> 00:42s</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            backgroundColor: '#32cd32',
            borderRadius: 50,
            position: 'absolute',
            bottom: 15,
            right: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="check" color="white" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  Txt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  A: {
    fontSize: 18,
  },
  B: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3cb371',
  },
  Y: {
    fontSize: 15,
  },
  M: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});
