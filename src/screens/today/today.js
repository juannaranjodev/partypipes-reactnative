import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../main-tabs/header";

const navBarStyle = {
  // navBarBackgroundColor: "white",
  navBarButtonColor: "gray",
  navBarTextColor: "gray",
  statusBarTextColorScheme: "dark",
  navBarCustomView: "partypypes.NavView"
};

import { saveCurrentScreen } from "../../store/actions/front-end-state-actions/navigation";

class TodayScreen extends Component {
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
          navgatorStyle: {
            tabBarVisible: false
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

  render() {
    // alert(this.props.naviationName);
    return (
      <View>
        <Header onToggleSideBar={this.onToggleSideBar} />
        <Text>Today's shift</Text>
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     naviationName: state.navigationStore.screenName
//   };
// };

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
