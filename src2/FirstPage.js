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

import {Router, Stack, Scene} from 'react-native-router-flux';
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
            flexDirection: 'row',
            height: 60,
          }}>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="down" color="white" size={25} />
          </TouchableOpacity>
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
            }}>
            <Text style={styles.Hdng}>Playlists </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 150,
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 15,
          }}>
          <View style={{flex: 4}}>
            <Image
              style={{width: 130, height: 130}}
              source={{
                uri:
                  'http://www.fubiz.net/wp-content/uploads/2016/02/mixedblockbusters-2-900x1273.jpg',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.scnd}>My Playlistt</Text>
            <TouchableOpacity onPress={() => Actions.AuthorsScreen()}>
              <Text style={styles.Hdng}>4 Poducasts </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffff',
  },
  scnd: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
});
