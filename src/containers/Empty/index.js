// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import {CustomAccordion} from "../../components";
class Empty extends Component {
  render() {
    console.log(this.props,"PROPSSSSSSS");
    return (
      // <View style={styles.container}>
        <CustomAccordion/>
      // </View>
   
    );
  }
}

const mapStateToProps = (state) => ({});

const actions = {};

export default connect(mapStateToProps, actions)(Empty);
