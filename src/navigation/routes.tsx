import HomeScreen from "../screens/HomeScreen";
import PetsScreen from "../screens/PetsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { ComponentType } from "react";
import { Ionicons } from "@expo/vector-icons";

interface AppRoute {
  name: string;
  component: ComponentType<any>;
  iconName:  keyof typeof Ionicons.glyphMap;
}

const routes: AppRoute[] = [
  {
    name: "Pets",
    component: PetsScreen,
    iconName: "paw-outline",
  },
  {
    name: "Home",
    component: HomeScreen,
    iconName: "home-outline",
  },
  {
    name: "Settings",
    component: SettingsScreen,
    iconName: "settings-outline",
  },
];

export default routes;