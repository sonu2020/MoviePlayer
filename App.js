import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';

import {Router, Stack, Scene} from 'react-native-router-flux';
import IndroScreen from './src2/IndroScreen';
import FirstPage from './src2/FirstPage';
import AuthorsScreen from './src2/AuthorsScreen';
import Trending from './src2/Trending';
import historyScreen from './src2/historyScreen';
import historyScreen2 from './src2/historyScreen2';
import IntrestsScreen from './src2/IntrestsScreen';
import LibraryScreen from './src2/LibraryScreen';
import LoginScreen from './src2/LoginScreen';
import LoginScreen2 from './src2/LoginScreen2';
import MyPlaylistScreen from './src2/MyPlaylistScreen';
import NewReleasesScreen from './src2/NewReleasesScreen';
import NextupScreen from './src2/NextupScreen';
import PlaylistWhiteScreen from './src2/PlaylistWhiteScreen';
import PodcastDetail from './src2/PodcastDetail';
import PodcastsScreen from './src2/PodcastsScreen';
import SearchScreen from './src2/SearchScreen';
import SearchScreen2 from './src2/SearchScreen2';
import TechnologyScreen from './src2/TechnologyScreen';
import SettingScreen from './src2/SettingScreens';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Router>
          <Stack>
            <Scene
              key="IndroScreen"
              component={IndroScreen}
              title="IndroScreen"
              hideNavBar={true}
            />

            <Scene
              key="FirstPage"
              component={FirstPage}
              title="FirstPage"
              hideNavBar={true}
            />
            <Scene
              key="AuthorsScreen"
              component={AuthorsScreen}
              title="AuthorsScreen"
              hideNavBar={true}
            />
            <Scene
              key="Trending"
              component={Trending}
              title="Trending"
              hideNavBar={true}
            />
            <Scene
              key="historyScreen"
              component={historyScreen}
              title="historyScreen"
              hideNavBar={true}
            />
            <Scene
              key="historyScreen2"
              component={historyScreen2}
              title="historyScreen2"
              hideNavBar={true}
            />
            <Scene
              key="IntrestsScreen"
              component={IntrestsScreen}
              title="IntrestsScreen"
              hideNavBar={true}
            />
            <Scene
              key="LibraryScreen"
              component={LibraryScreen}
              title="LibraryScreen"
              hideNavBar={true}
            />
            <Scene
              key="LoginScreen"
              component={LoginScreen}
              title="LoginScreen"
              hideNavBar={true}
            />
            <Scene
              key="LoginScreen2"
              component={LoginScreen2}
              title="LoginScreen2"
              hideNavBar={true}
            />
            <Scene
              key="MyPlaylistScreen"
              component={MyPlaylistScreen}
              title="MyPlaylistScreen"
              hideNavBar={true}
            />
            <Scene
              key="NewReleasesScreen"
              component={NewReleasesScreen}
              title="NewReleasesScreen"
              hideNavBar={true}
            />
            <Scene
              key="NextupScreen"
              component={NextupScreen}
              title="NextupScreen"
              hideNavBar={true}
            />
            <Scene
              key="PlaylistWhiteScreen"
              component={PlaylistWhiteScreen}
              title="PlaylistWhiteScreen"
              hideNavBar={true}
            />
            <Scene
              key="PodcastDetail"
              component={PodcastDetail}
              title="PodcastDetail"
              hideNavBar={true}
            />
            <Scene
              key="PodcastsScreen"
              component={PodcastsScreen}
              title="PodcastsScreen"
              hideNavBar={true}
            />
            <Scene
              key="SearchScreen"
              component={SearchScreen}
              title="SearchScreen"
              hideNavBar={true}
            />
            <Scene
              key="SearchScreen2"
              component={SearchScreen2}
              title="SearchScreen2"
              hideNavBar={true}
            />
            <Scene
              key="SettingScreen"
              component={SettingScreen}
              title="SettingScreen"
              hideNavBar={true}
            />
            <Scene
              key="TechnologyScreen"
              component={TechnologyScreen}
              title="TechnologyScreen"
              hideNavBar={true}
            />
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
