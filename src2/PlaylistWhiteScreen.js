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
      <View style={{flex: 1}}>
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
            <AntDesign name="arrowdown" color="black" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 8,
              justifyContent: 'center',
            }}
            onPress={() => Actions.PodcastDetail()}>
            <Text style={styles.Hdng}>Playlists </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.scnd}>There's no Playlists created.</Text>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              width: 280,
              marginTop: 10,
              backgroundColor: 'red',
              borderRadius: 5,
            }}>
            <Text style={styles.K}>CREATE A NEW PLAYLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  scnd: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  K: {
    fontSize: 18,
    color: '#fff',
  },
});
