import { TouchableWithoutFeedback, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import routes from "./NavBarRoutes";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#4C8EDA",
        tabBarShowLabel: false,
        tabBarButton: (props) => (
          <TouchableWithoutFeedback onPress={props.onPress}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.children}
            </View>
          </TouchableWithoutFeedback>
        ),

        headerStyle: styles.headerStyle,
        headerTitle: () => <Ionicons name="paw" size={35} color="#6FB2F2" />,
        headerTitleAlign: "center",
      }}
    >
      {routes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={route.iconName as keyof typeof Ionicons.glyphMap}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#3A4B5C",
    borderTopWidth: 0,
  },
  headerStyle: {
    height: 80,
    backgroundColor: "#3A4B5C",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
