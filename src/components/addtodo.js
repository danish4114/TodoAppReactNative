import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  SectionList,
  List,
  ListItem,
  ListView,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { targetNewValue, addNewValue } from "../redux/actions";

class AddTodo extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
  }
  onChange = e => {
    this.props.newValue(e);
  };
  onPress = () => {
    this.props.addtodo();
    this.props.navigation.navigate("Todo");
  };
  render() {
    return (
      <View style={styles.view}>
        <View>
          <TextInput
            value={this.props.newValu}
            onChangeText={e => this.onChange(e)}
            placeholder="addtodo........."
          />
        </View>
        <Button onPress={this.onPress} title="ADDTODO" color="green" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    newValu: state.fetchReducer.newValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newValue: value => dispatch(targetNewValue(value)),
    addtodo: () => dispatch(addNewValue())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

const styles = StyleSheet.create({
  section: {
    backgroundColor: "black",
    padding: 10,
    color: "#f5f5f5",
    paddingLeft: 10,
    fontSize: 20
  },
  sectionItem: {
    marginLeft: 30
  },
  view: {
    backgroundColor: "#f5f5f5"
  },
  Button: {
    width: 100
  }
});
