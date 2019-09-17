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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

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
          style={{width: '100%', height: 60, marginTop: 20, marginLeft: 15}}>
          <Text style={styles.Hdng}>Settings</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            marginLeft: 15,
          }}
          onPress={() => Actions.TechnologyScreen()}>
          >
          <View style={{flex: 6}}>
            <Text style={styles.H}>AutoPlay</Text>
            <Text style={styles.G}>
              Contounure the porpopsfhyhfhojyyoj hfoj gjhjoh
            </Text>
          </View>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
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
            marginTop: 25,
            flexDirection: 'row',
            marginLeft: 15,
          }}>
          <View style={{flex: 6}}>
            <Text style={styles.H}>Offline mode</Text>
            <Text style={styles.G}>
              When you jihe the porpopsfhyhfhojyyoj hfoj gjhjoh
            </Text>
          </View>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
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
            marginTop: 25,
            flexDirection: 'row',
            marginLeft: 15,
          }}>
          <View style={{flex: 6}}>
            <Text style={styles.H}>Dark Theme</Text>
            <Text style={styles.G}>Activate the Dark theme</Text>
            <Text style={styles.G}>Detivate the Dark theme</Text>
          </View>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
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
            marginTop: 25,
            flexDirection: 'row',
            marginLeft: 15,
          }}>
          <View style={{flex: 6}}>
            <Text style={styles.H}>Download with mobile</Text>
            <Text style={styles.G}>
              Allows the app to perfomanece downloads
            </Text>
          </View>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
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
            marginTop: 25,
            flexDirection: 'row',
            marginLeft: 15,
          }}>
          <View style={{flex: 6}}>
            <Text style={styles.H}>About</Text>
            <Text style={styles.G}>Went to knowm more about that</Text>
          </View>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="ios-arrow-forward" color="white" size={30} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Hdng: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#fff',
  },
  H: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  G: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
