import { Alert, SafeAreaView, StyleSheet,  } from "react-native";
import Card from "../components/Card";

export default function PetsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Card id="AddPets" onPress={() => Alert.alert("Lorem Ipsum")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#1E2A38",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
});
