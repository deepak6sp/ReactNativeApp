/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import Header from "./app/components/header";
import Footer from "./app/components/footer";
import Home from "./app/home/home";

class RetailApp extends Component {
  render(){
      return(
        <View style={{flex: 1}}>
          <Header/>
          <Home/>
          <Footer />
        </View>
      );
    }
}



AppRegistry.registerComponent('RetailApp', () => RetailApp);
