import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import MainText from "@Component/Text/main-text";

const shiftContext = "Bespoke at Westfield San Francisco Centre 845 Market Street, Suit 450, San Francisco";

export default class Shift extends Component {
  render() {
    const { colors } = this.props;
    return (
      <View style={[styles.shiftContainer, {backgroundColor: colors.backgroundColor}]}>
        <MainText style={styles.shiftTime}>3:00pm - 10:00pm</MainText>
        <MainText style={[styles.shiftText, {color: colors.color}]}>Load In</MainText>
        <MainText style={[styles.shiftText, styles.shiftContext]}>{shiftContext}</MainText>
        <View style={styles.shiftTimesContainer}>
          <View style={styles.subTimesContainer}>
            <MainText style={[styles.shiftText, styles.shiftName]}>Clock In</MainText>
            <MainText style={styles.shiftText}>2:58pm</MainText>
          </View>
          <MainText style={[styles.shiftText, {color: colors.color}]}>2:03 hours</MainText>
        </View>
        <View style={styles.shiftTimesContainer}>
          <View style={styles.subTimesContainer}>
            <MainText style={[styles.shiftText, styles.shiftName]}>Lunch break</MainText>
            <MainText style={styles.shiftText}>4:58pm</MainText>
          </View>
          <MainText style={[styles.shiftText, {color: colors.color}]}>2:03 hours</MainText>
        </View>
        <View style={[styles.shiftTimesContainer,{marginTop: 10}]}>
          {this.props.noteStatus ?
            <React.Fragment>
              <MainText style={styles.shiftText}>$10.00 reimburse for parking</MainText>
              <View style={styles.subTimesContainer}>
                <Icon name="edit-2" size={16} style={{marginRight: 3}} />
                <MainText style={styles.shiftText}>Edit</MainText>
              </View>
            </React.Fragment>
            :
            <React.Fragment>
              <View></View>
              <View style={styles.subTimesContainer}>
                <Icon name="plus" size={16} style={{marginRight: 3}}/>
                <MainText style={styles.shiftText}>Add note</MainText>
              </View>
            </React.Fragment>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shiftContainer: {
    paddingTop: 18,
    paddingBottom: 25,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 25,
    borderRadius: 3
  },
  shiftTime: {
    fontSize: 20,
    color: "black",
    marginBottom: 10
  },
  shiftText: {
    fontSize: 16,
    fontWeight: "400"
  },
  shiftContext: {
    color: "#41424A",
    marginBottom: 10,
    marginTop: 10
  },
  shiftTimesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  subTimesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  shiftName: {
    color: "#777EB0",
    marginRight: 15
  }
})
