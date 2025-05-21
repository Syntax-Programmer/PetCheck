import { StyleSheet, View, Text } from "react-native";

const PetInfoCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.petName}>AddMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  petName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default PetInfoCard;
