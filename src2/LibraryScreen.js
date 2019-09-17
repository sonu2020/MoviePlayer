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
import {Actions} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            width: '100%',
            height: 80,
            justifyContent: 'center',
            marginLeft: 18,
          }}>
          <Text style={styles.Hdng}>Library</Text>
        </View>
        <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="menu-fold" color="red" size={25} />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.K}>Playlits</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => Actions.LoginScreen()}>
            <Ionicons name="ios-arrow-forward" color="white" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="account-supervisor-circle"
              color="red"
              size={30}
            />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.K}>Your Podcasts</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="ios-arrow-forward" color="white" size={25} />
          </View>
        </View>

        <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="clouddownloado" color="red" size={30} />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.K}>Downloads</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="ios-arrow-forward" color="white" size={25} />
          </View>
        </View>
        <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="md-time" color="red" size={30} />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.K}>Recently Played</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="ios-arrow-forward" color="white" size={25} />
          </View>
        </View>
        <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="playlist-check"
              color="red"
              size={30}
            />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.K}>Interests</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="ios-arrow-forward" color="white" size={25} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  K: {
    fontSize: 22,
    color: '#fff',
  },
});
