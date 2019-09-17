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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import Slider from '@react-native-community/slider';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#3D3D3D'}}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            backgroundColor: '#140707',
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowleft" color="white" size={35} />
          </View>
          <View style={{flex: 8, marginLeft: 80, justifyContent: 'center'}}>
            <Text style={styles.G}>Podcast Detail</Text>
          </View>
        </View>
        <View style={{width: '100%', height: 200, flexDirection: 'row'}}>
          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 140, height: 180}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPyfZTJONbvksWQoxIPePbE19t8bLpp8CC50OXKLXGujvFpBSUA',
              }}
            />
          </View>
          <View style={{flex: 6, justifyContent: 'center', marginLeft: 15}}>
            <Text style={styles.Hdng}>How to use the</Text>
            <Text style={styles.Hdng}>Dragonglass</Text>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
              <AntDesign name="star" color="#ffd700" size={15} />
              <AntDesign name="star" color="#ffd700" size={15} />
              <AntDesign name="star" color="#ffd700" size={15} />
              <AntDesign name="star" color="#ffd700" size={15} />
              <AntDesign name="star" color="#ffd700" size={15} />
              <FontAwesome5 name="star-half-alt" color="#ffd700" size={14} />
            </View>
            <TouchableOpacity
              style={{
                marginBottom: 75,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
                width: 110,
                backgroundColor: 'black',
                borderRadius: 5,
              }}>
              <Text style={styles.K}>#technolgy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{flex: 3}}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                backgroundColor: 'red',
                borderRadius: 5,
              }}
              onPress={() => Actions.PodcastsScreen()}>
              <Text style={styles.Hdng}>PLAY</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 5}}>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                width: 160,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 5,
              }}>
              <Text style={styles.Hdng}>ADD TO PLAYLIST</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, alignItems: 'center', marginTop: 10}}>
            <FontAwesome name="cloud-download" color="#fff" size={45} />
          </View>
        </View>
        <View
          style={{
            width: 100,
            height: 30,
          }}></View>
        <Text style={styles.L}>Description</Text>
        <View
          style={{
            width: 370,
            marginLeft: 20,
            height: 120,
            backgroundColor: 'black',
            marginTop: 10,
          }}>
          <Text style={styles.Hdng}>
            In keb jsdhf zlvdb wrzbj gsd xvh trjhb df gtrj ygh fdg hjg dsggd
            tsjd th vdsb svr dsfhd gmhm bef fgr sdr g gr gg rgrh6u efeg5
            jighirjgojr sdnvkzrjegx
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 50,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_Z-f2qcBPt47XBbsViZzg8ifcloy41xsKk2VRYWiLLbv9Y1p',
              }}
            />
          </View>
          <View style={{flex: 6, marginTop: 10}}>
            <Text style={styles.K}>Getting started </Text>
            <Text style={styles.Hdng}>Bruce Banner</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="playcircleo" color="white" size={30} />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Entypo name="controller-next" color="white" size={30} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  G: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
  },
  K: {
    fontSize: 15,
    color: '#fff',
  },
  L: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});
