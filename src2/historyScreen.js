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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

export default class historyScreen extends Component {
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
            <Text style={styles.Hdng}>#history</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <View style={{flex: 7}}>
            <Text style={styles.scnd}>New Releases</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 3,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              backgroundColor: 'red',
              borderRadius: 5,
            }}
            onPress={() => Actions.historyScreen2()}>
            <Text style={styles.K}>LISTEN NOW</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={{width: 420, height: 180}}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-HbGD71j-ZH6CqJV7a2cmlzs32d8ouEjAL1NssSkV6LEuMN9',
          }}>
          <Text style={styles.H}>How to build a wall</Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <AntDesign name="star" color="#ffd700" size={25} />
            <AntDesign name="star" color="#ffd700" size={25} />
            <AntDesign name="star" color="#ffd700" size={25} />
            <AntDesign name="star" color="#ffd700" size={25} />
            <AntDesign name="star" color="#ffd700" size={25} />
            <FontAwesome5 name="star-half-alt" color="#ffd700" size={22} />
          </View>
        </ImageBackground>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            marginTop: 25,
          }}>
          <View style={{flex: 7}}>
            <Text style={styles.scnd}>Featured</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 3,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              backgroundColor: 'red',
              borderRadius: 5,
            }}>
            <Text style={styles.K}>LISTEN NOW</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.scnd}>1</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 70, height: 70}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBmS-QuYf_UH5RcDBSC9qciAGji_aJio-j-0Dviowhf066eH6',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.Hdng}>A brief story about the free people</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.scnd}>2</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 70, height: 70}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrGvXw83sU7-mzG_8PMWFGJYYJ8e4dFupp5K5HOAoJhLaM2L1tQ',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.Hdng}>How to use the Dragans</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.scnd}>3</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 70, height: 70}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWj7zSi5_hYUovZw6rRX95u7Xag5xEHkv11QADf9Z460ckaPxLQ',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.Hdng}>How to build a wall </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 20,
    color: '#ffff',
  },
  scnd: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  K: {
    fontSize: 15,
    color: '#fff',
  },
  H: {
    fontSize: 22,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
