import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  // Button,
  TouchableNativeFeedback
} from "react-native";
import { Header } from "native-base";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class HomePage extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };
  }
  onPress = () => {
    if (this.state.name == "" && this.state.password == "") {
      alert("Please Fill Required Credentials");
    } else if (this.state.password !== "" && this.state.name == "") {
      alert("Please Enter Your Name");
    } else if (this.state.name !== "" && this.state.password == "") {
      alert("Please Enter Your Password");
    } else {
      this.props.navigation.navigate("Todo");
      this.setState({ name: "", password: "" });
    }
  };
  render() {
    return (
      <View style={styles.parentView}>
        <Header>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Icon
              style={styles.homeIcon}
              name="home"
              size={40}
              color="#f5f5f5"
            />
          </View>
          <Text style={styles.headerText}>TodoApp</Text>
          {/* <Icon style={styles.homeIcon} name="home" size={40} color="#f5f5f5" /> */}
        </Header>
        <View style={styles.loginView}>
          <View style={styles.childParentView}>
            <View style={styles.inputView}>
              <TextInput
                onChangeText={e => this.setState({ name: e })}
                value={this.state.name}
                style={{ marginLeft: 80, width: 150, color: "#f5f5f5" }}
                placeholder="Enter Your Name...."
              />
            </View>
            <View style={styles.password}>
              <TextInput
                secureTextEntry={true}
                onChangeText={e => this.setState({ password: e })}
                style={{ marginLeft: 80, width: 150, color: "#f5f5f5" }}
                placeholder="Enter Your Password...."
              />
            </View>
            <View style={{ width: 150, marginTop: 20 }}>
              {/* <Button title="button" onPress={this.onPress} /> */}
              <Button
                onPress={this.onPress}
                buttonStyle={{ borderRadius: 20, width: 150 }}
                title="Submit"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default HomePage;
const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "#f5f5f5",
    marginRight: 100
  },
  homeIcon: {
    marginTop: 8
  },
  loginView: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  parentView: {
    flex: 1,
    backgroundColor: "#0885EE"
  },
  childParentView: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  inputView: {
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: "green",
    marginBottom: 10,
    justifyContent: "center"
  },
  password: {
    width: 300,
    height: 60,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center"
  }
});
