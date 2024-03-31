import { Stack } from "expo-router";

const Layout = () => {
  return (
      <Stack>
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
      </Stack>
  );
};

export default Layout;
