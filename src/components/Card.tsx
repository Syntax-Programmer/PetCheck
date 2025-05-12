import {
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  GestureResponderEvent,
  Image,
} from "react-native";

interface CardProps {
  id: string;
  image?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
}

const Card: React.FC<CardProps> = ({ image, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
    >
      {image && <Image source={image} style={styles.image} />}
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
    minHeight: 50,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  // title: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   marginBottom: 6,
  // },
  // description: {
  //   fontSize: 14,
  //   color: "#555",
  // },
});

export default Card;
