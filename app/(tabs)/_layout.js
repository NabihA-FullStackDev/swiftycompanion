import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";

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
          headerShown: false,
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
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
