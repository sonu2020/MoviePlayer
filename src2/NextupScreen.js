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
          <View style={{flex: 8, marginLeft: 30, justifyContent: 'center'}}>
            <Text style={styles.Hdng}>Next Up</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 10,
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6GgGxXCAnx-iGcF0uM06X9flPYIjJdhSpcQADDVEQFwJrFuxgQ',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.K}>Building the Stormbreaker</Text>
            <Text style={styles.G}>Tormund Glantbane</Text>
          </View>
          <TouchableOpacity
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => Actions.PlaylistWhiteScreen()}>
            <AntDesign name="close" color="white" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 10,
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXnnONV0Yar34f1PX6wlQYE5yTPMI3I4DUtWD1knBzRFT6XOS',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.K}>How to bulid wall</Text>
            <Text style={styles.G}>Tormund Glantbane</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="close" color="white" size={25} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 10,
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1lwilnb0IgF9-xtdcAWbuP3c6i8A3UJXpV6mev-ZGWAVr8_E',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.K}>Shaving your bread</Text>
            <Text style={styles.G}>Tormund Glantbane</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="close" color="white" size={25} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            marginTop: 10,
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
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ59HZCKT15QIjOkDDl8a9iPDicz1jR2udhg0rYZXdtF6mXqx5',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.K}>the effect of radbilation</Text>
            <Text style={styles.G}>Tormund Glantbane</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="close" color="white" size={25} />
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  G: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
  },
});
