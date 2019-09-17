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
  Text,
  StatusBar,
} from 'react-native';

export default class WalkScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            height: 380,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 280, height: 120}}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIe_J3G-DL__R5crtKUGO-z9h0_LQ_i7YXlrGAfgD43QsyhIvkCw',
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.welcome}>Welcome!</Text>
        </View>
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
            <Text style={styles.P}>Sign in</Text>
          </View>
        </TouchableOpacity>
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
            <Text style={styles.T}>Sign up</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 50,
            marginTop: 15,
          }}>
          <View
            style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={styles.Language}>Language: </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text style={styles.Language2}> English ></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
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
  Language: {
    fontSize: 15,
  },
  Language2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
