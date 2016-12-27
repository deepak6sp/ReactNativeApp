/**
 * footer component
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from "./footerCss.js";

export default class Footer extends Component {
  render(){
      return(
        <View style={styles.footer}>
        	<Text style={styles.text}>
        		Footer
        	</Text>
        </View>
      )
    }
}
