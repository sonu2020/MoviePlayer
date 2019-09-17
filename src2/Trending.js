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

export default class App extends Component {
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
              borderBottomWidth: 3,
              borderBottomColor: 'red',
            }}>
            <Text style={styles.N}>Trending</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.K}>Authors</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 340,

            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <View style={{flex: 7}}>
              <TouchableOpacity onPress={() => Actions.historyScreen()}>
                <Image
                  style={{width: 210, height: 240}}
                  source={{
                    uri:
                      'https://mlpnk72yciwc.i.optimole.com/w:1002/h:1252/q:auto/https://www.bleedingcool.com/wp-content/uploads/2019/05/spider-man-far-from-home-mj-1172110.jpg',
                  }}
                />
              </TouchableOpacity>
              <View style={{flex: 3, backgroundColor: '#fff'}}>
                <Text style={styles.P}>Opportunities at Ireland</Text>
                <Image
                  style={{width: 40, height: 40, borderRadius: 50}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRYEUPzuSwcd7PEBwiqaB2mIL7HkDPJRCRZ8LsHnhT6qOUe78',
                  }}
                />
                <Text style={styles.P}>Ivar,the Bonless</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 7, marginLeft: 15}}>
                <Image
                  style={{width: 190, height: 240}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbgnfKdJSEScKsSEXjzGX4ocNwdrEXX5oyjjKnCMy3HC0rS9i',
                  }}
                />
              </View>
              <View style={{flex: 3, backgroundColor: '#fff', marginLeft: 15}}>
                <Text style={styles.P}>Dealing with sharks</Text>
                <Image
                  style={{width: 40, height: 40, borderRadius: 50}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfdvt3Hdjfpjhv9ylZtSPP5L6n6jebYWNsd2S1YMARu6zoCoA',
                  }}
                />
                <Text style={styles.P}>Triyon Lannister</Text>
              </View>
            </View>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
