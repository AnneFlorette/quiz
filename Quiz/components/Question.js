import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { checkForUpdateAsync } from "expo/build/Updates/Updates";
import { createPointerEventsContainer } from "react-navigation-stack";

export default class Question extends Component {
  constructor(props) {
    super(props);
    let o = this.props.questions;
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );

    this.state = {
      buttonColors: ["orange", "orange", "orange", "orange"],
      questions: o,
      currentQuestion: o.pop()
    };
  }
  resetDisplay() {
    setTimeout(() => {
      let nouvelleQuestion = this.props.questions.pop();
      if (!nouvelleQuestion) {
        alert("FIN");
      } else {
        this.setState(state => {
          state.currentQuestion = nouvelleQuestion;
          state.buttonColors = ["orange", "orange", "orange", "orange"];
          return state;
        });
      }
    }, 3000);
  }

  check(id) {
    let rightAnswerId = this.state.currentQuestion.answers.indexOf(
      this.state.currentQuestion.answers.filter(e => e.isRight)[0]
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
          <Text style={styles.questionText}>
            {this.state.currentQuestion.question}
          </Text>
        </View>
        <View style={styles.answers}>
          <View style={styles.buttonsView}>
            <Button
              title={this.state.currentQuestion.answers[0].answer}
              onPress={() => {
                this.check(0);
                this.resetDisplay();
              }}
              color={this.state.buttonColors[0]}
            />
          </View>

          <View style={styles.buttonsView}>
            <Button
              title={this.state.currentQuestion.answers[1].answer}
              onPress={() => {
                this.check(1);
                this.resetDisplay();
              }}
              color={this.state.buttonColors[1]}
            />
          </View>
          <View style={styles.buttonsView}>
            <Button
              title={this.state.currentQuestion.answers[2].answer}
              onPress={() => {
                this.check(2);
                this.resetDisplay();
              }}
              color={this.state.buttonColors[2]}
            />
          </View>
          <View style={styles.buttonsView}>
            <Button
              title={this.state.currentQuestion.answers[3].answer}
              onPress={() => {
                this.check(3);
                this.resetDisplay();
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
    justifyContent: "center",

    padding: 20,
    backgroundColor: "#fcc601"
  },
  answers: {
    flexWrap: "wrap",
    backgroundColor: "#64b2ba",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonsView: {
    padding: 10,
    width: "50%"
  },
  questionText: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold"
  }
});
