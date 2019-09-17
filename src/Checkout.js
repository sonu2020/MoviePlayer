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
            <Text style={styles.Hdng}>Checkout </Text>
          </View>
        </View>
        <Text style={styles.D}>Cart Summery</Text>
        <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
          <View style={{flex: 6}}>
            <Text style={styles.P}>Subtotal(4 items)</Text>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.P}>Rs.180.00</Text>
          </View>
        </View>
        <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
          <View style={{flex: 6}}>
            <Text style={styles.P}>Production Discounts</Text>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.P}>Rs.1235.00</Text>
          </View>
        </View>
        <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
          <View style={{flex: 6}}>
            <Text style={styles.P}>Delivery Charges</Text>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.P}>Rs.00.00</Text>
          </View>
        </View>
        <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
          <View style={{flex: 6}}>
            <Text style={styles.P}>Est.Total</Text>
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.P}>Rs.320.00</Text>
          </View>
        </View>
        <Text style={styles.D}>Recipient Details</Text>
        <TouchableOpacity
          style={{
            width: 340,
            height: 50,
            marginTop: 15,
            marginLeft: 35,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 2,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={styles.T}>Ishan tank</Text>
          </View>
        </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  P: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
  },
});
