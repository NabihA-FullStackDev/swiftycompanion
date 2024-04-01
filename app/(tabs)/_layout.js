import { Tabs } from "expo-router";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
=======
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
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
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
>>>>>>> ffaf808 (header profile ok search screen)
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
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
<<<<<<< HEAD
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
=======
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
>>>>>>> ffaf808 (header profile ok search screen)
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
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
<<<<<<< HEAD
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
=======
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
