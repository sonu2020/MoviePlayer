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
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  StatusBar,
  Switch,
} from 'react-native';

import {Router, Stack, Scene} from 'react-native-router-flux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import Slider from '@react-native-community/slider';

export default class DiscoverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sw: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 190,
            marginTop: 110,
            height: 190,
            borderRadius: 95,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Actions.FirstPage()}>
          <FontAwesome name="compass" color="black" size={120} />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.Hdng}>DISCOVER</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.K}>Find a new way to sharp your knowedge</Text>
          <Text style={styles.K}>about the world.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

  K: {
    fontSize: 18,
    color: '#fff',
  },
});
