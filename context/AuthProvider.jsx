import { useSegments, useRouter, useRootNavigationState } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { Platform } from "react-native";
=======
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))

const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(token) {
  const segments = useSegments();
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (rootNavigationState?.key) {
      if (!token && !inAuthGroup) {
        router.replace("/LoginScreen");
      } else if (token && inAuthGroup) {
        router.replace("/profile");
      }
    }
  }, [token, segments]);
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
  const [refresh, setRefresh] = useState(null);
  const [profile, setProfile] = useState(null);
  const [coalition, setCoalition] = useState(null);
=======
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))

  useProtectedRoute(token);

  const authContext = {
    token,
    setToken,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
    refresh,
    setRefresh,
    profile,
    setProfile,
    coalition,
    setCoalition
=======
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
