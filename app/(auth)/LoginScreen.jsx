import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Platform,
} from "react-native";
import { StyleSheet } from "react-native";

import { getCode } from "../requests/getCode.js";
import { useAuth } from "../context/AuthProvider.jsx";
import getToken from "../requests/getToken.js";
import { useState } from "react";
import { router } from "expo-router";

const LoginScreen = () => {
  const [spam, setSpam] = useState(false);
  const { setToken, setRefresh } = useAuth();

  const handlePress = async () => {
    setSpam(true);
    try {
      const code = await getCode();
      if (code !== "") {
        await getToken(code, setToken, setRefresh);
        if (code && Platform.OS === 'android')
          router.back();
        setSpam(false);
      }
    } catch (error) {
      setSpam(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/Background-cropped.jpg")}
      >
        {!spam ? (
          <TouchableOpacity
            onPress={() => handlePress()}
            style={styles.buttonLogin}
          >
            <Text style={styles.textLogin}>{`Log in with 42`}</Text>
          </TouchableOpacity>
        ) : (
          <ActivityIndicator size={"large"} />
        )}
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    width: 190,
    height: 63,
    flexShrink: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
  },
  textLogin: {
    width: 190,
    height: 42,
    flexShrink: 0,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: 5,
  },
});
