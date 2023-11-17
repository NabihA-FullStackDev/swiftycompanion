import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
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
  const router = useRouter();

  // Todo: Creer les fonction pour la validation du token <-- Las modification ici
  // useEffect(() => {
  //   let tmp;
  //   if ((tmp = getFromStore("access_token")) !== NULL) {
  //     if (verify_token_validity(tmp) == true) {
  //       setToken(tmp);
  //     } else {
  //       refreshToken();
  //     }
  //     tmp = NULL;
  //   }
  // }, []);

  useEffect(() => {
    if (code) {
      getToken(code, setToken);
    }
  }, [code]);

  useEffect(() => {
    if (token) {
      const user = getUrl("v2/me", token); //Todo: recuperer user et l'envoyer a la route user
      console.log(user);
      putInStore("access_token", token);
      // router.push(`views/search/Search`);// Todo: a transformer en route user
    }
  }, [token]);

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
      <OAuthBtn setCode={setCode} />
    </SafeAreaView>
  );
};

export default Home;
