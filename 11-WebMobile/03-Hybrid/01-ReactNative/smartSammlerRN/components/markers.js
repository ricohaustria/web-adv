import React, { Component } from "react";
import { Text, View, StatusBar, StyleSheet, ListView } from "react-native";

const markers = [
  {
    id: 1000,
    imgURL: "/assets/images/beeren.png",
    lable: "Waldviertel",
    type: 1,
    coords: { lat: 48.5839237, lng: 15.4276355 },
    remark:
      "Als Beere gilt in der Botanik eine aus einem einzigen Fruchtknoten hervorgegangene Schließfrucht, bei der die komplette Fruchtwand (Perikarp) auch noch bei der Reife saftig oder mindestens fleischig ist",
    picture: null
  },
  {
    id: 1001,
    imgURL: "/assets/images/schwammerl.png",
    lable: "Steiermark",
    type: 3,
    coords: { lat: 47.5308866, lng: 15.9476211 },
    remark:
      "Schwammerl ist die Bezeichnung für Großpilze in Österreich -  Gemeint sind damit nicht alle Pilze im biologischen Sinn, sondern die Fruchtkörper essbarer Pilzarten",
    picture: null
  },
  {
    id: 1002,
    imgURL: "/assets/images/holler.png",
    lable: "Neuwaldegg",
    type: 2,
    coords: { lat: 48.234201, lng: 16.277753 },
    remark:
      "Holunder-Arten sind meist verholzende Pflanzen und wachsen als Halbsträucher, Sträucher oder kleine Bäume",
    picture: null
  }
];

export default class Markers extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      markerDataSource: ds
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.markerDataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  componentDidMount() {
    this.fetchMarkers();
  }

  renderRow(marker, sectionId, rowId, highlightRow) {
    return (
      <View style={styles.row}>
        <Text>{marker.lable}</Text>
      </View>
    );
  }

  fetchMarkers() {
    let url = "http://sammlerapi.integrations.at/api/markers";
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        debugger;
        console.log(`markers received by fetch: `, data);
        this.setState({
          markerDataSource: this.state.markerDataSource.cloneWithRows(data)
        });
      });
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f4f4f4",
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});
