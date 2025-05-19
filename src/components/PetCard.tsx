import {
  StyleSheet,
  Pressable,
  Text,
  ImageSourcePropType,
  GestureResponderEvent,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface PetCardProps {
  id: string;
  petImage?: ImageSourcePropType;
  petName?: string;
  onPress?: (event: GestureResponderEvent) => void;
  layout: "add_card" | "pet_card";
}

const PetCard: React.FC<PetCardProps> = ({
  petImage,
  onPress,
  petName,
  layout,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        layout === "pet_card" && styles.petCard,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      {layout === "add_card" && (
        <Ionicons name="add-outline" size={25} color="#FFFFFF" />
      )}
      {layout === "pet_card" && (
        <>
          {petImage && <Image source={petImage} style={styles.image} />}
          {petName && <Text style={styles.petName}>{petName}</Text>}
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3D4F6C",
    borderRadius: 12,
    padding: 16,
    marginBottom: 6,
    marginTop: 6,
    display: "flex",
    alignItems: "center",
  },
  petCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "cover",
    overflow: "hidden",
  },
  petName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default PetCard;
