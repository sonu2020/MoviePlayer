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
  ImageBackground,
  StatusBar,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
        }}>
        <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 8,
              marginLeft: 140,
              marginTop: 15,
            }}>
            <Text style={styles.H}>Your Interests</Text>
          </View>
          <TouchableOpacity
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => Actions.LibraryScreen()}>
            <MaterialCommunityIcons name="check-all" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.Hdng}>Choose the topics that you're</Text>
          <Text style={styles.Hdng}>interested in.</Text>
        </View>
        <ImageBackground
          style={{width: 420, height: 180, marginTop: 15}}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBbXzpODSFSwVa0rJ931ocL4dlVsXi0QKesupw3xvcHVCZjq4vg',
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.G}>ALL</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={{width: 420, height: 180, marginTop: 15}}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IP1YySauAfchEkS9XmwIzN6vG_DWKEA2dO3EMZ3PL4lxDHg-',
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.G}>TECHNOLAGY</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={{width: 420, height: 180, marginTop: 15}}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCFrrGjAgAzGhufGuT5uM3w8hmcq7hhamcccQKkIbYyB1mAeN',
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.G}>PHILOSOFY</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
  },
  H: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  G: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});
