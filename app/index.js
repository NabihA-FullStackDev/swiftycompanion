import { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import axios from "axios";

import { API_URL } from "@env";
import { COLORS } from "./constants/theme";
import OAuthBtn from "./components/auth/OAuthBtn";
import getToken from "./requests/getToken";
import getUrl from "./requests/getUrl.js";

axios.defaults.baseURL = API_URL;

const Home = () => {
  const [code, setCode] = useState();
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  // Todo: Creer les fonction pour la validation du token
  // useEffect(() => {
  //   let tmp;
  //   if ((tmp = getFromStore("access_token")) !== NULL) {
  //     if (verify_token_validity(tmp) == true) setToken(tmp);
  //   }
  // }, []);

  useEffect(() => {
    if (code) {
      getToken(code, setToken);
    }
  }, [code]);

  useEffect(() => {
    if (token) {
      getUrl("/v2/me", token, setProfile); //Todo: recuperer user et l'envoyer a la route user
      // putInStore("access_token", token);
      // router.push(`views/search/Search`);// Todo: a transformer en route user
    }
  }, [token]);

  console.log(profile);
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      {profile == null ? <OAuthBtn setCode={setCode} /> : <Text>Profile</Text>}
    </SafeAreaView>
  );
};

export default Home;
