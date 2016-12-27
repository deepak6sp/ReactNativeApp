/**
 * header component
 */

import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import styles from "./headerCss.js";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render(){

      return(
        <View style={styles.header}>
          <TouchableHighlight style={styles.menu} onPress={this.props.onPress} >
            <Text style={styles.menuText} >Menu</Text>
          </TouchableHighlight>
        	<View style={styles.pageTitle}>
        		<Text style={styles.pageTitleText} color='#fff'>Page title</Text>
        	</View>
        </View>
      )
    }
}
