import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import MapView from 'react-native-maps';
import MainText from "@Component/Text/main-text";
import TitleText from "@Component/Text/titleText";
import Header from "../main-tabs/header";

export default class SeeWorkingScreen extends Component {
  state = {
    focusedLocation: {
      latitude: 37.7900532,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122 
    }
  }
  onViewShifts = () => {
    this.props.navigator.push({
      title: "today",
      screen: "partypypes.TodayScreen",
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  render() {
    return (
      <View>
        <Header onToggleSideBar={this.onToggleSideBar} />
        <ScrollView style={styles.root}>
          <View style={styles.topHeader}>
            <TitleText>Today's Shifts</TitleText>
            <TouchableOpacity onPress={this.onViewShifts}>
              <MainText style={styles.topRightText}>View shifts</MainText>
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <MapView initialRegion={this.state.focusedLocation}/>
          </View>
          <View style={styles.staffContainer}>
            <View>
              <MainText style={styles.staffName}>Ana Markovic</MainText>
              <MainText style={styles.staffShift}>Lunch break</MainText>
            </View>
            <View style={styles.staffRight}>
              <Icon name="map-pin" size={16} />
              <MainText style={styles.staffMapText}>Show on map</MainText>
            </View>
          </View>
          <View style={styles.staffContainer}>
            <View>
              <MainText style={styles.staffName}>Niko Beretic</MainText>
              <MainText style={styles.staffShift}>Anderson wedding Load In</MainText>
            </View>  
            <View style={styles.staffRight}>
              <Icon name="map-pin" size={16} />
              <MainText style={styles.staffMapText}>Show on map</MainText>
            </View>
          </View>
          <View style={styles.staffContainer}>
            <View>
              <MainText style={styles.staffName}>Jake Anderson</MainText>
              <MainText style={styles.staffShift}>Office hours</MainText>
            </View>
            <View style={styles.staffRight}>
              <Icon name="map-pin" size={16} />
              <MainText style={styles.staffMapText}>Show on map</MainText>
            </View>
          </View>
          <View style={styles.staffContainer}>
            <View>
              <MainText style={styles.staffName}>Pavle Prica</MainText>
              <MainText style={styles.staffShift}>Load out - Henderson wedding</MainText>
            </View>
            <View style={styles.staffRight}>
              <Icon name="map-pin" size={16} />
              <MainText style={styles.staffMapText}>Show on map</MainText>
            </View>
          </View>
          <View style={{marginTop: 20, marginBottom: 50}}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 10
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  topRightText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#777EB0",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#777EB0",
  },
  mapContainer: {
    width: "100%",
    height: 350,
    backgroundColor: "#A6A6B3",
    marginTop: 25,
    marginBottom: 15
  },
  staffContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  staffName: {
    fontSize: 18,
    color: "#41424a",
    fontWeight: "400"
  },
  staffShift: {
    fontSize: 14,
    color: "#22A6FF",
    fontWeight: "400"
  },
  staffRight: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  staffMapText: {
    fontSize: 14,
    color: "#A6A6B3",
    marginLeft: 5
  }
});
