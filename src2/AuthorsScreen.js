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

export default class AuthorsScreen extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
        <ImageBackground
          style={{width: 420, height: 220}}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYDIkk_qVXjKT1fzyQ4sbR986TmilV3Kd6JuS6prLr44mDm0nAQ',
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 30,
              alignItems: 'center',
            }}>
            <Text style={styles.Hdng}>#business</Text>
          </View>
        </ImageBackground>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>Featured</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => Actions.Trending()}>
              <Text style={styles.K}>Trending</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 3,
              borderBottomColor: 'red',
            }}>
            <Text style={styles.N}>Authors</Text>
          </View>
        </View>
        <View style={{width: '100%', height: 100, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Image
              style={{width: 80, height: 80, borderRadius: 50}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPOkwyvhzngR2Ip9yFAPqRa4idL-eRSBwmt-7oqrl_oDl0oiMcw',
              }}
            />
          </View>
          <View style={{flex: 5, marginTop: 20}}>
            <Text style={styles.P}>Tyrion Lani</Text>
          </View>
          <TouchableOpacity style={{flex: 2, marginTop: 18}}>
            <AntDesign name="search1" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: 100, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Image
              style={{width: 80, height: 80, borderRadius: 50}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRYEUPzuSwcd7PEBwiqaB2mIL7HkDPJRCRZ8LsHnhT6qOUe78',
              }}
            />
          </View>
          <View style={{flex: 5, marginTop: 20}}>
            <Text style={styles.P}>Thanos</Text>
          </View>
          <View style={{flex: 2, marginTop: 18}}>
            <AntDesign name="search1" color="#fff" size={30} />
          </View>
        </View>
        <View style={{width: '100%', height: 100, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Image
              style={{width: 80, height: 80, borderRadius: 50}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPOkwyvhzngR2Ip9yFAPqRa4idL-eRSBwmt-7oqrl_oDl0oiMcw',
              }}
            />
          </View>
          <View style={{flex: 5, marginTop: 20}}>
            <Text style={styles.P}>Tony stark</Text>
          </View>
          <View style={{flex: 2, marginTop: 18}}>
            <AntDesign name="search1" color="#fff" size={30} />
          </View>
        </View>
        <View style={{width: '100%', height: 100, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Image
              style={{width: 80, height: 80, borderRadius: 50}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRYEUPzuSwcd7PEBwiqaB2mIL7HkDPJRCRZ8LsHnhT6qOUe78',
              }}
            />
          </View>
          <View style={{flex: 5, marginTop: 20}}>
            <Text style={styles.P}>Thanos</Text>
          </View>
          <View style={{flex: 2, marginTop: 18}}>
            <AntDesign name="search1" color="#fff" size={30} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },

  K: {
    fontSize: 18,
    color: '#fff',
  },
  N: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  P: {
    fontSize: 20,
    color: '#fff',
  },
});
