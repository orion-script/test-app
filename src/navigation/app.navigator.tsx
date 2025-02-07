import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeScreen } from "../screens/home.screen";
import { GinieScreen } from "../screens/ginie.screen";
import { YoloPlayScreen } from "../screens/yoloPlay.screen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TAB_ICON = {
  Home: { library: FontAwesome5, name: "road" },
  YoloPlay: { library: Ionicons, name: "chatbox" },
  Ginie: { library: Ionicons, name: "help-circle" },
};

const createScreenOptions = ({ route }: { route: any }) => {
  const { library: IconLibrary, name: iconName } =
    TAB_ICON[route.name as keyof typeof TAB_ICON];

  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <IconLibrary name={iconName as any} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#D2AC47",
    tabBarInactiveTintColor: "#828282",
    headerShown: false,
  };
};

const TabNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="YoloPlay" component={YoloPlayScreen} />
    <Tab.Screen name="Ginie" component={GinieScreen} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <Stack.Navigator>
    {/* Main app screens with tabs */}
    <Stack.Screen
      name="MainApp"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name=""
      component={}
      options={{ headerShown: false }}
    /> */}
  </Stack.Navigator>
);
