import { ImageSourcePropType } from "react-native";

export type Species = "Dog" | "Cat" | "Parrot"; // TODO: add more.

export type QuantityUnits = "Cups" | "Grams" | "Pieces"; // TODO: add more if needed

export type MealTime = "breakfast" | "lunch" | "dinner";

export interface Diet {
  food: string,
  quantity: number,
  quantityUnit: QuantityUnits
};

export type Meals = Record<MealTime, Diet | undefined>;

export interface Pet {
  id: string,

  species: Species,
  // TODO: breed: Breed

  petName?: string,
  petIcon?: ImageSourcePropType,

  meals: Meals
};