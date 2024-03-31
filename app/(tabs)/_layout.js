import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";

import icons from "../../constant/icons.js";

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="profile"
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          href: "/profile",
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: "/search",
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
