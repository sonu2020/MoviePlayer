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
            flexDirection: 'row',
            height: 60,
          }}>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="left" color="white" size={25} />
          </TouchableOpacity>
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              marginLeft: 70,
            }}>
            <Text style={styles.Hdng}>Search Authors </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.scnd}>Results for:'giantsbane'</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 230,
            backgroundColor: 'white',
            marginTop: 15,
            borderRadius: 5,
            marginHorizontal: 25,
          }}>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>Tormund Giantsbane</Text>
            <Text style={styles.E}>6 Podcasts</Text>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 3,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                backgroundColor: 'black',
                borderRadius: 5,
                margin: 10,
              }}
              onPress={() => Actions.SearchScreen2()}>
              <Text style={styles.P}>#philsofy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 3,
                height: 50,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                marginRight: 10,
                backgroundColor: 'black',
                borderRadius: 5,
              }}>
              <Text style={styles.P}>#technology</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flex: 4,
              height: 20,
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,

              backgroundColor: 'black',
              borderRadius: 5,
            }}>
            <Text style={styles.P}>#history</Text>
          </TouchableOpacity>
          <View
            style={{
              width: 55,
              height: 55,
              backgroundColor: 'red',
              borderRadius: 50,
              position: 'absolute',
              bottom: 15,
              right: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="search1" color="white" size={25} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  scnd: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  K: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  E: {
    fontSize: 15,
  },
  P: {
    fontSize: 15,
    color: '#fff',
  },
});
