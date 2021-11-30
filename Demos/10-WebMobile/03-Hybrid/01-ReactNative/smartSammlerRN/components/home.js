import React, { Component } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import Markers from "./components/markers";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to smartSammler</Text>
        <Markers style />
      </View>
    );
  }
}

export default Home;
