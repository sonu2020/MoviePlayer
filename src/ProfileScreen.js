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
import colors from './src/constants/colors';

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
          <View
            style={{
              flex: 8,
              marginLeft: 160,
              justifyContent: 'center',
            }}>
            <Text style={styles.Hdng}>Keells </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="pencil-outline"
              color="black"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 140,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
            }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5voqqX3sWK0PRpcyIZd34znk6J3ZBSoUSq8kQ7LoXUU3Y4c4jxA',
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 2}}>
            <Text style={styles.scnd}>Ishan Madushka</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.K}>isa.abhv@gmail.com</Text>
            <Text> +69 856 58 5556</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="lock1" color="black" size={30} />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.scnd}>Change Password</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="ios-arrow-forward" color="black" size={30} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="lock1" color="black" size={30} />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.scnd}>Payment</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="ios-arrow-forward" color="black" size={30} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="lock1" color="black" size={30} />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.scnd}>Contry</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="ios-arrow-forward" color="black" size={30} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="logout" color="black" size={25} />
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.scnd}>Logout</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="ios-arrow-forward" color="black" size={30} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  scnd: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
