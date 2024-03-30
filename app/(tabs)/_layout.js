import { Tabs } from "expo-router";
<<<<<<< HEAD
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
=======
import { Text, View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="profile">
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
      <Tabs.Screen
        name="profile"
        options={{
          href: "/profile",
          title: "",
          tabBarIcon: ({ color }) => (
<<<<<<< HEAD
            <FontAwesome name="user" size={24} color={color} />
          ),
          headerShown: false,
=======
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Profile
              </Text>
            </View>
          ),
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: "/search",
          title: "",
          tabBarIcon: ({ color }) => (
<<<<<<< HEAD
            <FontAwesome name="search" size={24} color={color} />
          ),
          headerShown: false,
=======
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Search
              </Text>
            </View>
          ),
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
