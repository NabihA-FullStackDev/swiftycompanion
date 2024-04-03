import { Stack } from "expo-router";
import axios from "axios";

import { API_URL } from "@env";
import { AuthProvider } from "../context/AuthProvider.jsx";

axios.defaults.baseURL = API_URL;
// Orientation.lockToPortrait();

const Layout = () => {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default Layout;
