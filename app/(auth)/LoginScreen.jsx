<<<<<<< HEAD
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Platform,
} from "react-native";
=======
import { View, Text, TouchableOpacity } from "react-native";
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
import { StyleSheet } from "react-native";

import { getCode } from "../requests/getCode.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import getToken from "../requests/getToken.js";
<<<<<<< HEAD
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
        if (Platform.OS === 'android')
          router.back();
        setSpam(false);
      }
    } catch (error) {
      setSpam(false);
=======

const LoginScreen = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { setToken, setRefresh } = useAuth();
=======
  const { setToken } = useAuth();
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
=======
  const { setToken, setRefresh } = useAuth();
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)

  const handlePress = async () => {
    try {
      const code = await getCode();
      if (code !== "") {
<<<<<<< HEAD
<<<<<<< HEAD
        await getToken(code, setToken, setRefresh);
      }
    } catch (error) {
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
        await getToken(code, setToken);
=======
        await getToken(code, setToken, setRefresh);
>>>>>>> 0fb997a (Renew request for 429, add anti spam, better loading)
      }
    } catch (error) {
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
      console.log(error);
    }
  };

  return (
<<<<<<< HEAD
    <View style={styles.root}>
<<<<<<< HEAD
      <ImageBackground
        style={styles.background}
        source={require("../../assets/Background-cropped.jpg")}
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
=======
      <ImageBackground style={styles.background} source={require('../../assets/Background-cropped.jpg')}>
        <TouchableOpacity
          onPress={() => handlePress()}
          style={styles.buttonLogin}
        >
          <Text style={styles.textLogin}>{`Log in with 42`}</Text>
        </TouchableOpacity>
<<<<<<< HEAD
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
      </ImageBackground>
=======
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={styles.buttonLogin}
      >
        <Text style={styles.textLogin}>{`Log with 42`}</Text>
      </TouchableOpacity>
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
    </View>
  );
};

export default LoginScreen;

<<<<<<< HEAD
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
<<<<<<< HEAD
    height: "100%",
    width: "100%",
=======
    height: '100%',
    width: '100%',
<<<<<<< HEAD
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 31aa7f0 (header profile ok search screen)
>>>>>>> ffaf808 (header profile ok search screen)
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
=======
const styles = StyleSheet.create((theme) => ({
  buttonLogin: {
    width: 190,
    height: 42,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.45098039507865906)",
  },
  textLogin: {
    width: 168,
    height: 42,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    color: "rgba(0, 0, 255, 1)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "400",
  },
}));
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
