import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function PetsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Pet Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#3498ef",
    alignItems: "center",
    justifyContent: "center",
  },
});
