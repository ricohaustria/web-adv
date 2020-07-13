import React from "react";
import { StyleSheet, Text, View, Navigator } from "react-native";
import Markers from "./components/markers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "brown"
  }
});
