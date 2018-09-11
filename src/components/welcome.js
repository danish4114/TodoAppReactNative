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
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("HomePage");
    }, 3000);
  }
  render() {
    return (
      <View style={styles.view}>
        <View>
          <Text style={styles.text}>WELCOME!</Text>
        </View>
      </View>
    );
  }
}
export default Welcome;
const styles = StyleSheet.create({
  view: {
    margin: 10,
    borderRadius: 30,
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily:'Arial'
  }
});
