import { useSegments, useRouter, useRootNavigationState } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

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
  const [profile, setProfile] = useState(null);
  const [coalition, setCoalition] = useState(null);

  useProtectedRoute(token);

  const authContext = {
    token,
    setToken,
    profile,
    setProfile,
    coalition,
    setCoalition
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
