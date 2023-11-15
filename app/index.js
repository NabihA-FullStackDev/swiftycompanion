import { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import axios from 'axios';

import OAuthBtn from "./components/auth/OAuthBtn";
import getToken from "./requests/getToken";
import { API_URL } from '@env';
import { COLORS } from "./constants/theme";
import getMe from "./requests/getMe";

axios.defaults.baseURL = API_URL;

const Home = () => {
  const [code, setCode] = useState();
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (code) {
      getToken(code, setToken);
    }
  }, [code]);

  useEffect(() => {
    if (token) {
      getMe(token);
      // router.push(`/search/Search`);
    }
  }, [token])
  console.log(token);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen 
      options={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerShadowVisible: false,
        headerTitle: ""
       }}
      />
      <OAuthBtn setCode={setCode} />
    </SafeAreaView>
  );
};

export default Home;
