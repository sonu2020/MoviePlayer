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
  Switch,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Actions} from 'react-native-router-flux';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sw: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            width: '100%',
            height: 40,
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowleft" color="white" size={25} />
          </View>
          <View style={{flex: 8}}></View>
        </View>
        <View
          style={{
            width: '100%',
            height: 180,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View style={{flex: 4}}>
            <TouchableOpacity onPress={() => Actions.NewReleasesScreen()}>
              <Image
                style={{width: 150, height: 175}}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamN1UvMttE2CKpJcmOSijvCEpgyM_XqttDHcwKli7590z_UdW',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={styles.L}>My Playlist</Text>
            <View
              style={{
                width: '100%',
                height: 50,
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  height: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  backgroundColor: 'red',
                  borderRadius: 5,
                }}>
                <Text style={styles.Hdng}>PLAY ALL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginLeft: 20,
                  height: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 5,
                }}>
                <Text style={styles.Hdng}>SUFFLE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 10,
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.G}>Available Offline</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Switch
              onValueChange={() => this.setState({sw: !this.state.sw})}
              value={this.state.sw}
            />
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
            height: 80,
            flexDirection: 'row',
            marginTop: 10,
          }}>
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
          <View style={{flex: 6, marginTop: 10}}>
            <Text style={styles.K}>Getting started </Text>
            <Text style={styles.Hdng}>Bruce Banner</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="playcircleo" color="white" size={30} />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Entypo name="controller-next" color="white" size={30} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  G: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
  },
  K: {
    fontSize: 15,
    color: '#fff',
  },
  L: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});
