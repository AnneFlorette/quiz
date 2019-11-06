import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ImageBackground
} from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Merci :D
//       </Text>
//     </View>
//   );
// }

export default class Logo extends Component {
  render() {
    // let pic = {
    //   uri: './assets/quiz.png'
    // };
    return (
      //<Image source={pic} style={{ width: 193, height: 110 }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/quiz.png")}
            style={{
              marginTop: 5,
              width: 150,
              height: 50,
              resizeMode: "stretch"
            }}
          />
        </View>
        <ImageBackground
          source={require("./assets/presentation.png")}
          style={{
            width: "60%",
            height: "50%",
            resizeMode: "contain",
            flex: 8
          }}
        >
          <View style={styles.questions}></View>
          <View style={styles.answers}>
            <View style={styles.buttonsView}>
              <Button
                title="answer1"
                onPress={() => {
                  alert("You tapped the button 1!");
                }}
                color="#c76363"
              />
            </View>

            <View style={styles.buttonsView}>
              <Button
                title="answer2"
                onPress={() => {
                  alert("You tapped the button 2!");
                }}
                color="#63b1c7"
              />
            </View>
          </View>
          <View style={styles.answers}>
            <View style={styles.buttonsView}>
              <Button
                title="answer3"
                onPress={() => {
                  alert("You tapped the button 3!");
                }}
                color="#76c763"
              />
            </View>
            <View style={styles.buttonsView}>
              <Button
                title="answer4"
                onPress={() => {
                  alert("You tapped the button 4!");
                }}
                color="#b763c7"
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#e5e5d8",
    borderBottomWidth: 1,
    width: "100%"
  },
  questions: {
    flex: 4,
    width: "100%"
  },
  answers: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonsView: {
    margin: 20,
    width: "50%",
    justifyContent: "center"
  }
});
