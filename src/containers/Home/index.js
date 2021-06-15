// @flow
import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import BottomTab from "../../navigation/Bottom/Custom"
import { Fonts } from "../../theme"

const Home = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, fontFamily: Fonts.type.Arial}}>HomeStack</Text>
    </View>
  )
}

export default Home
