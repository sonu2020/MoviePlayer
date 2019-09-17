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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from './src/constants/colors';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowleft" color="black" size={30} />
          </TouchableOpacity>
          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              marginLeft: 40,
            }}>
            <Text style={styles.Hdng}>Keells Deal</Text>
          </View>
        </View>
        <Image
          style={{
            width: 260,
            height: 180,
            borderRadius: 5,
          }}
          source={{
            uri:
              'https://www.diabetescarecommunity.ca/wp-content/uploads/2018/05/10-fruits-and-vegetables.jpg',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 110,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.scnd}>Bell Pepper Red</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.Hdng}>Rs.1,100.00</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <AntDesign name="star" color="#ff6347" size={30} />
            <AntDesign name="star" color="#ff6347" size={30} />
            <AntDesign name="star" color="#ff6347" size={30} />
            <AntDesign name="star" color="#ff6347" size={30} />
            <AntDesign name="star" color="#ff6347" size={30} />
            <FontAwesome5 name="star-half-alt" color="#ff6347" size={27} />
          </View>
        </View>
        <Text>Quantity</Text>
        <View
          style={{
            width: '100%',
            height: 70,
            marginTop: 15,
            flexDirection: 'row',
            marginTop: 8,
          }}>
          <View
            style={{flex: 4, justifyContent: 'center', alignItems: 'flex-end'}}>
            <AntDesign name="minussquareo" color="black" size={45} />
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Txt}>2</Text>
          </View>
          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <FontAwesome name="plus-square-o" color="black" size={50} />
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 320,
            height: 50,
            marginTop: 15,
            borderRadius: 10,
            borderColor: '#32cd32',
            borderWidth: 2,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.T}>Buy Now</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 320,
            height: 50,
            marginTop: 15,
            borderRadius: 10,
            backgroundColor: '#32cd32',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.P}>Add to Cart</Text>
          </View>
        </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  Txt: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  P: {
    fontSize: 20,
    color: '#fff',
  },
  T: {
    fontSize: 20,
    color: '#32cd32',
  },
});
