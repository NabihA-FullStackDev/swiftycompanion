import { Stack } from "expo-router";
import axios from "axios";

import { API_URL } from "@env";
import { AuthProvider } from "../context/AuthProvider.jsx";

axios.defaults.baseURL = API_URL;

const Layout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default Layout;
