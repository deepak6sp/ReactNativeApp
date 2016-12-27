/**
 * home component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Nav from "./components/nav";

const styles = StyleSheet.create({
  main: {
  	flex:1,
    flexDirection:"column",
  }
});


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {"showNav": false};
  }
  _openMenu(){
    this.setState({"showNav": !this.state.showNav});
  }
  render(){
      return(
        <View style={styles.main}>
          <Header onPress={this._openMenu.bind(this)} />
          <Nav menuExpanded = {this.state.showNav}/>
        	<Home />
          <Footer />
        </View>
      )
    }
}
