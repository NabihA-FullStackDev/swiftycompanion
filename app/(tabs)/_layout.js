import { Tabs } from "expo-router";
import { Text, View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="profile">
      <Tabs.Screen
        name="profile"
        options={{
          href: "/profile",
          title: "",
          tabBarIcon: ({ color }) => (
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
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: "/search",
          title: "",
          tabBarIcon: ({ color }) => (
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
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
