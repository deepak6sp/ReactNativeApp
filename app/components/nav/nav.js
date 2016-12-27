/**
 * home component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Linking } from 'react-native';

import styles from "./navCss";

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render(){
      if(this.props.menuExpanded){
        styles.navBarExpanded = {"height":60,"borderBottomWidth":1,};
      } else{
        styles.navBarExpanded = {"height":0};
      }
      return(
        <View style={[styles.navBar]} >
          <TouchableHighlight style={[styles.navBarLinks,styles.navBarExpanded]}
            onPress={() => console.log("account link")}>
            <Text style={styles.navBarLinksText}>
              {/*onPress={() => Linking.openURL('/account')}> */}
                Account
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.navBarLinks,styles.navBarExpanded]}
            onPress={() => console.log("settings link")}>
            <Text style={styles.navBarLinksText}>
              Settings
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.navBarLinks,styles.navBarExpanded]}
              onPress={() => console.log("signIn/out link")}>
            <Text style={styles.navBarLinksText}>
              SignIn
            </Text>
          </TouchableHighlight>
        </View>
      )
    }
}
