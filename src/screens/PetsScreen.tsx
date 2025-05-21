import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import uuid from "react-native-uuid";
import { useState } from "react";

import { PetCardProps } from "../components/PetCard";
import PetCard from "../components/PetCard";

const petNameList = [
  "Pikachu",
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Jigglypuff",
  "Meowth",
  "Psyduck",
  "Eevee",
  "Snorlax",
  "Magikarp",
  "Gengar",
  "Mewtwo",
  "Lapras",
  "Vulpix",
  "Poliwag",
  "Growlithe",
  "Oddish",
  "Zubat",
  "Machop",
  "Ditto",
];

const PetCardStructure: React.FC = () => {
  const [cardData, setCardData] = useState<PetCardProps[]>([
    { id: "Add-Pets", layout: "add_card" },
  ]);

  const handleAddPet = () => {
    // TODO: Make a promt that asks for the pet image, pet mane etc.
    const newCard: PetCardProps = {
      id: uuid.v4(),
      petName: petNameList[(cardData.length - 1) % petNameList.length],
      petImage: require("./../../assets/icon.png"),
      layout: "pet_card",
    };
    setCardData((prev) => [...prev, newCard]);
  };

  const handlePetCard = (id: string) => {
    setCardData((prev) => prev.filter((card) => card.id !== id));
    // TODO: Display the plans and relevant things. Also add a way to go back to the add pet prompt to edit things.
  };

  return (
    <ScrollView style={styles.petCardStructureContainer}>
      {cardData.map((card) => (
        <PetCard
          key={card.id}
          {...card}
          onPress={
            card.layout === "add_card"
              ? handleAddPet
              : () => handlePetCard(card.id)
          }
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
  petCardStructureContainer: {
    height: "auto",
    minHeight: 50,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#1E2A38",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
