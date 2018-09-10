import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  TouchableNativeFeedback
} from "react-native";
import { Header } from "native-base";

class Welcome extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("HomePage");
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <View>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>WELCOME</Text>
        </View>
      </View>
    );
  }
}
export default Welcome;
