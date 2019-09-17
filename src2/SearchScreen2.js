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
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Actions} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{width: '100%', height: 60, marginTop: 20, marginLeft: 15}}>
          <Text style={styles.Hdng}>Search</Text>
        </View>

        <View
          style={{
            marginTop: 15,
            marginLeft: 15,
            height: 50,
            width: 390,
            backgroundColor: 'white',
            borderRadius: 5,
          }}>
          <TextInput
            style={styles.D}
            placeholder={'Search for a specific Author'}
          />
        </View>
        <View style={{width: '100%', height: 620, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => Actions.SettingScreen()}>
              <ImageBackground
                style={{width: 200, height: 180, marginTop: 15}}
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
            </TouchableOpacity>
            <ImageBackground
              style={{width: 200, height: 180, marginTop: 15}}
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
              style={{width: 200, height: 180, marginTop: 15}}
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
          <View style={{flex: 1}}>
            <ImageBackground
              style={{width: 200, height: 180, marginTop: 15}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFr05UrAi1JFuV_sLoKJagXrbx6uozdNSJpSskOiT2qZWFHrrVrw',
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
              style={{width: 200, height: 180, marginTop: 15}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQD6wPkFgM_6_QMULE7iTVf5UVwDlXziMBgYDa7_6TEjIIWhN1',
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
              style={{width: 200, height: 180, marginTop: 15}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKlg--8ZXcypcjG-fbOUoB8tTk2fMyc61oKFir9Lp0J-qy_JA',
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#fff',
  },
  H: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  G: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});
