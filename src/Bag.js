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
import Entypo from 'react-native-vector-icons/Entypo';
import colors from './src/constants/colors';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            backgroundColor: colors.primary,
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
            <Entypo name="shopping-bag" color="white" size={30} />
          </TouchableOpacity>
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
                  'https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-local.jpg',
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
          <View style={{flex: 3, justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                marginTop: 15,
                marginLeft: 10,
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
                <Text style={styles.T}>Buy Rs,220</Text>
              </View>
            </TouchableOpacity>
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
                  'https://www.bigbasket.com/media/uploads/p/s/10000068_22-fresho-capsicum-green.jpg',
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
          <View style={{flex: 3, justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                marginTop: 15,
                marginLeft: 10,
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
                <Text style={styles.T}>Buy Rs,220</Text>
              </View>
            </TouchableOpacity>
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
          <View style={{flex: 3, justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                marginTop: 15,
                marginLeft: 10,
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
                <Text style={styles.T}>Buy Rs,220</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
          }}>
          <View style={{flex: 4, alignItems: 'center'}}>
            <Text style={styles.scnd}>Subtotal(4 items)</Text>
          </View>
          <View style={{flex: 3}}></View>
          <View style={{flex: 3}}>
            <Text style={styles.scnd}>Rs.7,060.00</Text>
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
    color: '#fff',
  },
  scnd: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
