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
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
          }}>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="arrowleft" color="white" size={30} />
          </View>
          <View
            style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Hdng}>New Releases</Text>
          </View>
          <TouchableOpacity
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => Actions.NextupScreen()}>
            <AntDesign name="playcircleo" color="white" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>1</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6GgGxXCAnx-iGcF0uM06X9flPYIjJdhSpcQADDVEQFwJrFuxgQ',
              }}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.K}>Building the Stormbreaker</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>00:53</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>2</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXnnONV0Yar34f1PX6wlQYE5yTPMI3I4DUtWD1knBzRFT6XOS',
              }}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.K}>How to bulid wall</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>00:42</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>3</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1lwilnb0IgF9-xtdcAWbuP3c6i8A3UJXpV6mev-ZGWAVr8_E',
              }}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.K}>Shaving your bread</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>00:73</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>4</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ59HZCKT15QIjOkDDl8a9iPDicz1jR2udhg0rYZXdtF6mXqx5',
              }}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.K}>the effect of radbilation</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>00:34</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>5</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_Z-f2qcBPt47XBbsViZzg8ifcloy41xsKk2VRYWiLLbv9Y1p',
              }}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.K}>The josh Brolin</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>00:48</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>6</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BQyXCNlR0E8lfi6fkoGhpvFH_xP7ybSzK16UjYvlWEGbjsiqFg',
              }}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.K}>Learning how to hunt</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>00:89</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>6</Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 60, height: 60}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2BHaaxbTV-mi9XM7doFstxV9ogsFYFos879RCS5UsooOnYdN',
              }}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.K}>The mind of seer</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.K}>00:90</Text>
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
  K: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
