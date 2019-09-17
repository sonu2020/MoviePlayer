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

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Actions} from 'react-native-router-flux';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowleft" color="white" size={35} />
          </View>
          <View
            style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.G}>#technology</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="menu-unfold" color="white" size={30} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 320, height: 280}}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBykUgWqsamNmNOEBGwhhBjLvzIfF4qqZ_w01whsVbk6oDj0bpjw',
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.K}>Tormund Giantsbane</Text>
          <Text style={styles.G}>How to use the Dragonglass</Text>
        </View>
        <View style={{flex: 1, marginTop: 50}}>
          <Slider
            style={{width: 380, height: 15}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="#FFFFFF"
          />
        </View>

        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <AntDesign name="stepbackward" color="white" size={30} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="pausecircleo" color="red" size={40} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Entypo name="controller-next" color="white" size={40} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  K: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
  },

  G: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
  },
});
