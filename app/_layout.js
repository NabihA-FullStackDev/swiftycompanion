import { Stack } from "expo-router";
import axios from "axios";

import { API_URL } from "@env";
import { AuthProvider } from "../context/AuthProvider.jsx";

axios.defaults.baseURL = API_URL;
<<<<<<< HEAD
// Orientation.lockToPortrait();
=======
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))

const Layout = () => {
  return (
    <AuthProvider>
<<<<<<< HEAD
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
=======
      <Stack>
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default Layout;
