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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './src/constants/colors';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: Colors.primary,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="filter" color="#fff" size={30} />
          </TouchableOpacity>
          <View
            style={{
              flex: 4,

              justifyContent: 'center',
              marginLeft: 80,
            }}>
            <Text style={styles.Hdng}>Keells</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="search1" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="bell" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.Scnd}>All Categories</Text>
          </View>
          <View style={{flex: 3}}></View>
          <TouchableOpacity
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.P}>View All ></Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 120,
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 85,
                margin: 10,
                height: 85,
                backgroundColor: '#c0c0c0',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="home" color="white" size={35} />
            </TouchableOpacity>
            <Text>Household ></Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 85,
                height: 85,
                backgroundColor: '#c0c0c0',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <Entypo name="drink" color="white" size={35} />
            </TouchableOpacity>
            <Text>Drinks ></Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 85,
                height: 85,
                backgroundColor: '#c0c0c0',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <MaterialCommunityIcons name="food" color="white" size={35} />
            </TouchableOpacity>
            <Text>Grocery ></Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 85,
                height: 85,
                backgroundColor: '#c0c0c0',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <MaterialCommunityIcons
                name="food-fork-drink"
                color="white"
                size={35}
              />
            </TouchableOpacity>
            <Text>Liquer ></Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 10,
            flexDirection: 'row',
            marginLeft: 5,
          }}>
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.Scnd}>Nexus Member Deals</Text>
          </View>
          <View style={{flex: 1}}></View>
          <TouchableOpacity
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.P}>View All ></Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 130,
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{flex: 1}}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri:
                  'https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri:
                  'https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1}}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri:
                  'https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 10,
            flexDirection: 'row',
            marginLeft: 5,
          }}>
          <View
            style={{
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.Scnd}>Keells Deals</Text>
          </View>
          <View style={{flex: 3}}></View>
          <TouchableOpacity
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.P}>View All ></Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 130,
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{flex: 1}}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri:
                  'https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-local.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri:
                  'https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1}}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri:
                  'https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 22,
    color: '#fff',
  },
  Scnd: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  P: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32cd32',
  },
});
