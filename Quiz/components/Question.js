import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { checkForUpdateAsync } from "expo/build/Updates/Updates";
import { createPointerEventsContainer } from "react-navigation-stack";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColors: ["orange", "orange", "orange", "orange"]
    };
  }
  check(id) {
    let rightAnswerId = this.props.questions.answers.indexOf(
      this.props.questions.answers.filter(e => e.isRight)[0]
    );

    // if id == rightAnswerId
    // WIN

    [0, 1, 2, 3].forEach(i => {
      this.setState(state => {
        state.buttonColors[i] = "red";
        return state;
      });
    });

    this.setState(state => {
      state.buttonColors[rightAnswerId] = "green";
      return state;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questions}>
          <Text>{this.props.questions.question}</Text>
        </View>
        <View style={styles.answers}>
          <View style={styles.buttonsView}>
            <Button
              title={this.props.questions.answers[0].answer}
              onPress={() => {
                this.check(0);
              }}
              color={this.state.buttonColors[0]}
            />
          </View>

          <View style={styles.buttonsView}>
            <Button
              title={this.props.questions.answers[1].answer}
              onPress={() => {
                this.check(1);
              }}
              color={this.state.buttonColors[1]}
            />
          </View>
          <View style={styles.buttonsView}>
            <Button
              title={this.props.questions.answers[2].answer}
              onPress={() => {
                this.check(2);
              }}
              color={this.state.buttonColors[2]}
            />
          </View>
          <View style={styles.buttonsView}>
            <Button
              title={this.props.questions.answers[3].answer}
              onPress={() => {
                this.check(3);
              }}
              color={this.state.buttonColors[3]}
            />
          </View>
        </View>
      </View>
    );
  }
}

function ChangeColor() {}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  questions: {
    flex: 1,
    width: "100%"
  },
  answers: {
    flexWrap: "wrap",
    backgroundColor: "pink",

    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonsView: {
    padding: 10,
    width: "50%"
  }
});
