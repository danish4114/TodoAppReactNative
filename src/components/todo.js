import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  TouchableNativeFeedback,
  SectionList,
  ScrollView
} from "react-native";
import { Badge, Card } from "react-native-elements";
import { Header, Item, Content } from "native-base";
import data from "../db.json";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../redux/actions";
import Icon from "react-native-vector-icons/Entypo";

class Todo extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = { todo: data.todolist, checked: false };
  }
  onPress = () => {
    this.props.navigation.navigate("AddTodo");
  };
  onChange = (index, completed) => {
    this.props.forToggle({ index, completed });
  };
  editTodo = (e, index) => {
    this.props.forEdit({ e, index });
  };
  toHome = () => {
    this.props.navigation.navigate("HomePage");
  };
  forDelete = index => {
    this.props.fordelete(index);
  };
  render() {
    const result = this.props.data.map((Content, index) => {
      return (
        <Card key={index} containerStyle={{ padding: 0 }}>
          <View key={index} style={styles.parentView}>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                checkedColor="green"
                uncheckedColor="red"
                checked={Content.completed}
                onPress={() => {
                  this.onChange(index, Content.completed);
                }}
              />
              <TextInput
                value={Content.name}
                onChangeText={e => this.editTodo(e, index)}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              {Content.completed == true && (
                <Badge
                  containerStyle={{
                    width: 90,
                    backgroundColor: "green" /* marginRight: 10 */
                  }}
                >
                  <Text style={{ fontSize: 12 }}>completed</Text>
                </Badge>
              )}
              <Icon
                onPress={() => this.forDelete(index)}
                name="circle-with-cross"
                style={{ fontSize: 20, color: "red" /* marginBottom:35 */ }}
                backgroundColor="#f5f5f5"
              />
            </View>
          </View>
        </Card>
      );
    });
    return (
      <View>
        <Header>
          <Icon
            name="home"
            style={styles.leftHeaderIcon}
            backgroundColor="#f5f5f5"
            onPress={this.toHome}
          />
          <Text style={styles.headerText}>Todo List</Text>
          <View style={{ paddingLeft: 70, paddingTop: 15 }}>
            <Icon
              onPress={this.onPress}
              name="add-to-list"
              style={{ fontSize: 30, color: "#f5f5f5" }}
              backgroundColor="#f5f5f5"
            />
          </View>
        </Header>
        <ScrollView>{result}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.fetchReducer.data.todolist);
  return {
    data: state.fetchReducer.data.todolist
  };
};
const mapDispatchToProps = dispatch => {
  console.log(toggleTodo());
  return {
    forToggle: (index, completed) => dispatch(toggleTodo(index, completed)),
    forEdit: (value, index) => dispatch(editTodo(value, index)),
    fordelete: index => dispatch(deleteTodo(index))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "#f5f5f5",
    marginLeft: 90
  },
  section: {
    padding: 10,
    backgroundColor: "black",
    color: "#F5F5F5",
    fontSize: 20
  },
  item: {
    padding: 10,
    fontSize: 15
  },
  parentView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftHeaderIcon: {
    fontSize: 30,
    color: "#f5f5f5",
    marginTop: 13
  }
});
