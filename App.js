/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import './global.js';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import  HomeScreen  from './Screens/HomeScreen';
import {
  NavigationContainer
} from '@react-navigation/native';
import React from 'react';

const App = ({navigation}) => {
  return (

    <NavigationContainer >
      <StatusBar barStyle="dark-content" />
      <HomeScreen navigation={navigation}  />
   </NavigationContainer>
 
    
  );
};

export default App;
