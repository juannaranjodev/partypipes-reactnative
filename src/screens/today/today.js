import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Header from "../main-tabs/header";
import TitleText from "@Component/Text/titleText";
import { saveCurrentScreen } from "../../store/actions/front-end-state-actions/navigation";
import MainText from "@Component/Text/main-text";
import ClockTopTab from "./clockTopTab";
import Shift from "./shift";

const colors = [
  {
    backgroundColor: 'rgba(102, 212, 89, 0.2)',
    color: "#66D459"
  },
  {
    backgroundColor: 'rgba(34, 166, 255, 0.2)',
    color: "#22A6FF"
  },
  {
    backgroundColor: 'rgba(255,152,42,0.2)',
    color: "#FF982A"
  }
];

class TodayScreen extends Component {
  state = {
    clockValue: false
  }
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.onSaveCurrentScreen("Today");
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "right"
        });
      }
    }
    if (event.type == "DeepLink") {
      const parts = event.link;
      if (
        parts == "partypypes.ProfileScreen" &&
        event.payload === this.props.navigator.screenInstanceID
      ) {
        this.props.navigator.push({
          title: "Profile",
          screen: "partypypes.ProfileScreen",
          navigatorStyle: {
            navBarHidden: true
          }
        });
      }
    }
  };

  onToggleSideBar = () => {
    this.props.navigator.toggleDrawer({
      side: "right"
    });
  };

  toggleClock = (value) => {
    this.setState({clockValue: !this.state.clockValue});
  }

  onSeeWhoIsWorking = () => {
    this.props.navigator.push({
      title: "SeeWhoIsWorking",
      screen: "partypypes.SeeWorkingScreen",
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
            <TouchableOpacity onPress={this.onSeeWhoIsWorking}>
              <MainText style={styles.topRightText}>See who's working</MainText>
            </TouchableOpacity>
          </View>
          <ClockTopTab clockValue={this.state.clockValue} toggleClock={this.toggleClock}/>
          <Shift colors={colors[0]} noteStatus/>
          <Shift colors={colors[1]}/>
          <Shift colors={colors[2]} noteStatus />
          <View style={{ marginBottom: 50 }}></View>
        </ScrollView>
      </View>
    );
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
});


const mapDispatchToProps = dispatch => {
  return {
    onSaveCurrentScreen: screen => dispatch(saveCurrentScreen(screen))
  };
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(TodayScreen);

// export default TodayScreen;
