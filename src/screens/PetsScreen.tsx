import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { PetCardProps } from "../components/PetCard";
import PetCard from "../components/PetCard";

const PetCardStructure: React.FC = () => {
  const [cardData, setCardData] = useState<PetCardProps[]>([
    { id: "Add-Pets", layout: "add_card" },
  ]);

  const handleAddPet = () => {
    // TODO: Make a promt that asks for the pet image, pet mane etc.
    const newCard: PetCardProps = {
      id: `Pet-${cardData.length}`,
      petName: `Pet ${cardData.length}`,
      petImage: require("./../../assets/icon.png"),
      layout: "pet_card",
    };
    setCardData((prev) => [...prev, newCard]);
  };

  const handlePetCard = () => {
    // TODO: Display the plans and relevant things. Also add a way to go back to the add pet prompt to edit things.
  };

  return (
    <ScrollView style={styles.petCardStructureContainer}>
      {cardData.map((card) => (
        <PetCard
          key={card.id}
          {...card}
          onPress={card.layout === "add_card" ? handleAddPet : handlePetCard}
        />
      ))}
    </ScrollView>
  );
};

export default function PetsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PetCardStructure />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  petCardStructureContainer: { height: "auto", minHeight: 50, width: "100%" },
  container: {
    flex: 1,
    backgroundColor: "#1E2A38",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
});
