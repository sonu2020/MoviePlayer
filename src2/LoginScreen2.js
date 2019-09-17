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
      <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
        <ImageBackground
          style={{width: 420, height: 650}}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wGY0gZewYA_tTScJfcrujecH05H9xQACCbiBsshAtI0Sjns6',
          }}>
          <View
            style={{
              width: '100%',
              height: 50,
              marginTop: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.Hdng}>MINDCAST</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.K}>A new way to boost your</Text>
            <Text style={styles.P}> knowledge</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 200,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginTop: 20,
                height: 50,
                width: 370,
                backgroundColor: 'white',
                borderRadius: 5,
              }}>
              <TextInput style={styles.D} placeholder={'Email'} />
            </View>

            <View
              style={{
                marginTop: 20,
                height: 50,
                width: 370,
                backgroundColor: 'white',
                borderRadius: 5,
              }}>
              <TextInput style={styles.D} placeholder={'Password'} />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 40,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 7,
                width: '100%',
                height: 40,
                marginLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.K}>Not account ? </Text>
              <TouchableOpacity>
                <Text style={styles.P}> Register now!</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                flex: 3,
                height: 40,
                width: 70,
                backgroundColor: 'red',
                marginRight: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}
              onPress={() => Actions.MyPlaylistScreen()}>
              <Text style={styles.T}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              height: 40,
              marginTop: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.P}> OR</Text>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              flexDirection: 'row',
              width: 380,
              backgroundColor: '#6495ed',
              marginLeft: 20,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={styles.T}>Register with </Text>
            <Entypo name="facebook" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              flexDirection: 'row',
              width: 380,
              backgroundColor: '#ff4500',
              marginLeft: 20,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={styles.T}>Register with </Text>
            <AntDesign name="googleplus" color="#fff" size={30} />
          </TouchableOpacity>
        </ImageBackground>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  P: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  D: {
    fontSize: 15,
  },
  T: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
