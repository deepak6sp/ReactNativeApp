/**
 * home component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from "./homeCss";

export default class Home extends Component {
  render(){
      return(
        <View style={styles.home}>
        	<Text style={styles.page}>
        		HomePage
        	</Text>
        </View>
      )
    }
}
