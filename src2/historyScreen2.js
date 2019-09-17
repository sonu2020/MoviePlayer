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
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            width: '100%',
            marginTop: 35,
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
            <Text style={styles.scnd}>4</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => Actions.IntrestsScreen()}>
              <Image
                style={{width: 70, height: 70}}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cTz9aL-W3_wHZcCQesWsfqNYwpCYh_XLg3TXviUCJDYAq23UQQ',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.Hdng}>How to build a wall </Text>
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
            <Text style={styles.scnd}>5</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 70, height: 70}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qNe_PjvbjYgPyJ2ybC2xinGwBLp-o_qqskxbRWi5uVKQf5GPqg',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.Hdng}>The savage way of think </Text>
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
            <Text style={styles.scnd}>6</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 70, height: 70}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvm1XuwLo17uo8fJqMvqYknBUxE0I-LTqFcyrrEsRonUW-KifrQ',
              }}
            />
          </View>
          <View style={{flex: 6}}>
            <Text style={styles.Hdng}>Understanding Mance </Text>
          </View>
        </View>
        <Text style={styles.scnd}>Related Authors</Text>
        <Image
          style={{width: 420, height: 280}}
          source={{
            uri:
              'https://www.thewrap.com/wp-content/uploads/2017/07/spider-man-homecoming-characters-ages-ned-peter-parker-michelle.jpg',
          }}
        />
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
    marginTop: 55,
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
