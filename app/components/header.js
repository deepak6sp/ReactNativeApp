/**
 * header component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    height:60,
    borderBottomColor:"#666",
    borderBottomWidth:1
  },

  menu:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#333',
    borderRightColor:"#666",
    borderRightWidth:1,
    height:60,
  },
  menuText:{
    color:'#fff',
    textAlign:'center',
  },
  pageTitle:{
    flex:4,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#333',
  },
  pageTitleText:{
    color:'#fff'
  },
});

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
