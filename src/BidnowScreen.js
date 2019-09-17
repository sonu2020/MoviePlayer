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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
              flex: 8,
              marginLeft: 100,
              justifyContent: 'center',
            }}>
            <Text style={styles.Hdng}>Bid Now </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 130,
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <View style={{flex: 3, alignItems: 'center'}}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 5,
              }}
              source={{
                uri:
                  'https://www.bigbasket.com/media/uploads/p/s/50000482_6-fresho-cauliflower-organically-grown.jpg',
              }}
            />
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.scnd}>Bell Pepper Red</Text>
            <Text style={styles.scnd}>Unit price: Rs.1,200</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="minussquareo" color="black" size={25} />
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                }}>
                <Text style={styles.Txt}>1</Text>
              </View>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <FontAwesome name="plus-square-o" color="black" size={30} />
              </View>
            </View>
          </View>
          <View style={{flex: 3, justifyContent: 'center'}}></View>
        </View>
        <View style={{width: '100%', height: 80, flexDirection: 'row'}}>
          <TextInput
            placeholder={'Rs'}
            style={{
              padding: 10,
              width: 55,
              height: 50,
              marginTop: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'black',
              marginHorizontal: 10,
            }}
          />
          <TextInput
            placeholder={'Enter Your Price '}
            style={{
              padding: 10,
              width: 365,
              height: 50,
              marginTop: 20,
              marginRight: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'black',
              marginHorizontal: 10,
            }}
          />
        </View>
        <View style={{width: '100%', height: 80, flexDirection: 'row'}}>
          <View style={{flex: 7, marginLeft: 15, marginTop: 25}}>
            <Text style={styles.scnd}>Buy purcahsing your product</Text>
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="checkcircle" color="black" size={40} />
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
