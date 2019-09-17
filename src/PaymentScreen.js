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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './src/constants/colors';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 60,
            backgroundColor: '#32cd32',
          }}>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <View
            style={{
              flex: 8,
              marginLeft: 100,
              justifyContent: 'center',
            }}>
            <Text style={styles.Hdng}>Payment </Text>
          </View>
        </View>
        <Text style={styles.D}>Commercial Bank</Text>
        <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
          <View style={{flex: 6, marginLeft: 18}}>
            <Text style={styles.D}>Cardnumber</Text>
          </View>
          <View style={{flex: 4}}></View>
        </View>
        <Text style={styles.D}>.... .... ... ... ... 4561</Text>

        <Text style={styles.U}>Month/Year</Text>
        <Text style={styles.D}>06/2200</Text>
        <Text style={styles.D}>Mr.ishan Sharma</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  D: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
  },
  P: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  U: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 15,
  },
});
