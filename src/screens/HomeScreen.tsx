import { SafeAreaView, StyleSheet} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
    backgroundColor: "#1E2A38",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
});
