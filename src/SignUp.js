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
            <Text style={styles.In}>Sign in</Text>
          </TouchableOpacity>
          <View style={{flex: 6}}></View>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.Up}>Sign UP</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: 70, margin: 15}}>
          <View style={{flex: 9, justifyContent: 'center'}}>
            <Text style={styles.welcome}>Welcomec to Keells</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.M}>Let's get started</Text>
          </View>
        </View>

        <TextInput
          placeholder={'Name '}
          style={{
            padding: 10,
            width: 365,
            height: 50,
            marginTop: 30,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 20,
          }}
        />
        <TextInput
          placeholder={'Email '}
          style={{
            padding: 10,
            width: 365,
            height: 50,
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 20,
          }}
        />
        <TextInput
          placeholder={'Password '}
          secureTextEntry
          style={{
            padding: 10,

            width: 365,
            height: 50,
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 20,
          }}
        />
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
          <AntDesign name="arrowright" color="white" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Up: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32cd32',
  },
  In: {
    fontSize: 18,
  },
  welcome: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  M: {
    fontSize: 20,
  },
});
