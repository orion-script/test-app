import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import { HomeScreen } from "../screens/home.screen";
import { GinieScreen } from "../screens/ginie.screen";
import { YoloPlayScreen } from "../screens/yoloPlay.screen";

type TabBarIconProps = {
  source: any;
  size: number;
  color: string;
  focused: boolean;
};

const { width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TAB_ICONS = {
  Home: require("../../assets/home.png"),
  YoloPlay: require("../../assets/play.png"),
  Ginie: require("../../assets/ginie.png"),
};

const TabIcon: React.FC<TabBarIconProps> = ({
  source,
  size,
  color,
  focused,
}) => (
  <View
    style={[
      styles.iconContainer,
      focused && styles.activeIconContainer,
      source === TAB_ICONS.YoloPlay && styles.middleTabContainer,
    ]}
  >
    <Image
      source={source}
      style={[
        styles.icon,
        { tintColor: color, width: size * 0.6, height: size * 0.6 },
        source === TAB_ICONS.YoloPlay && styles.middleTabIcon,
      ]}
      resizeMode="contain"
    />
  </View>
);

const CurvedTabBackground = () => {
  const halfWidth = width / 2;
  return (
    <View style={styles.curvedContainer}>
      <Svg width={width} height="50" viewBox={`0 0 ${width} 50`}>
        <Path
          d={`M0 50 Q${halfWidth} 0 ${width} 50`}
          stroke="white"
          strokeWidth="0.8"
          fill="transparent"
        />
      </Svg>
    </View>
  );
};

const createScreenOptions = ({ route }: { route: any }) => {
  const iconSource = TAB_ICONS[route.name as keyof typeof TAB_ICONS];
  return {
    tabBarIcon: ({
      size,
      color,
      focused,
    }: {
      size: number;
      color: string;
      focused: boolean;
    }) => (
      <TabIcon
        source={iconSource}
        size={size}
        color={color}
        focused={focused}
      />
    ),
    tabBarActiveTintColor: "#fff",
    tabBarInactiveTintColor: "#828282",
    tabBarStyle: {
      backgroundColor: "transparent",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 90,
      borderTopWidth: 0,
    },
    tabBarBackground: () => <CurvedTabBackground />, // Injecting the curved background
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: "bold",
      marginTop: 20,
    },
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
    <Stack.Screen
      name="MainApp"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2C2C2C",
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconContainer: {
    borderColor: "#828282",
  },
  icon: {
    width: 24,
    height: 24,
  },
  middleTabContainer: {
    width: 55, // Enlarged size for middle tab
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Pushes the middle tab upwards
  },
  middleTabIcon: {
    width: 28, // Larger icon size for middle tab
    height: 28,
  },
  curvedContainer: {
    position: "absolute",
    top: -50,
    left: 0,
    right: 0,
    height: 20,
    width: "100%",
  },
});
