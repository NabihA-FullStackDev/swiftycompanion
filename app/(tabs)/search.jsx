<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
import {
  View,
=======
import {
  View,
  Text,
>>>>>>> 386e34e (header profile ok search screen)
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  TextInput,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
  Text,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";
import { useRouter } from "expo-router";

import { useAuth } from "../../context/AuthProvider.jsx";
import getUserByLogin from "../requests/getUserByLogin.js";
import getTokenInfo from "../requests/getTokenInfo.js";
import refreshToken from "../requests/refreshToken.js";

const Search = () => {
  const [input, setInput] = useState("");
  const [spam, setSpam] = useState(false);
  const [loginError, setLoginError] = useState(false);
<<<<<<< HEAD
  const { token, setToken, refresh, setRefresh, profile, coalition } = useAuth();
=======
  const { token, profile, coalition } = useAuth();
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
  const router = useRouter();

  const handlePress = async () => {
    getTokenInfo(token);
    if (input) {
      setSpam(true);
      setLoginError(false);
<<<<<<< HEAD
      if (getTokenInfo(token) < 100)
        refreshToken(refresh, setToken, setRefresh);
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
      const id = await getUserByLogin(input.toLocaleLowerCase(), token);
      if (id) {
        router.push(`/components/search/${id}`);
      } else {
        setLoginError(true);
      }
      setSpam(false);
    }
  };
  return (
    <View style={styles.root}>
      {profile && coalition ? (
        <>
          <ImageBackground
            style={styles.background}
            source={{ uri: coalition }}
          >
            <View style={styles.inputBox}>
              {!spam ? (
                <>
                  <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={(value) => setInput(value)}
                    placeholder="Login"
                    autoCapitalize="none"
                    placeholderTextColor={"rgba(84,84,84, 1)"}
                    onSubmitEditing={handlePress}
                  />
                  <TouchableOpacity
                    disabled={spam}
                    style={styles.inputBtn}
                    onPress={handlePress}
                  >
                    <FontAwesome name="search" />
                  </TouchableOpacity>
                </>
              ) : (
                <ActivityIndicator size={"large"} />
              )}
            </View>
            {loginError && (
              <Text style={styles.errorMessage}>
                Login: {input} n'existe pas
              </Text>
            )}
<<<<<<< HEAD
          </ImageBackground>
        </>
      ) : (
        <View style={styles.background}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
=======
import { View, Text } from "react-native";
import React from "react";
<<<<<<< HEAD
=======
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";

import { useAuth } from "../../context/AuthProvider.jsx";
import getMe from "../requests/getMe.js";
import getCoaUser from "../requests/getCoaUser.js";
import HeaderProfile from "../components/profile/HeaderProfile.jsx";
>>>>>>> 386e34e (header profile ok search screen)

const Search = () => {
  const [profile, setProfile] = useState(null);
  const [coalition, setCoalition] = useState("");
  const { token, setToken } = useAuth();

  const handlePress = () => {
    setToken(null);
  };

  useEffect(() => {
    if (!profile && token) {
      getMe(token, setProfile);
    }
    if (profile && token) {
      getCoaUser(profile.id, token, setCoalition);
    }
  }, [profile]);

  return (
<<<<<<< HEAD
    <View>
      <Text>search</Text>
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
    <View style={styles.root}>
      {profile && coalition ? (
        <>
          <ImageBackground style={styles.background} source={{ uri: coalition }}>
              <TextInput style={styles.input} placeholder="Login" autoCapitalize="none" placeholderTextColor={'rgba(1,1,1, 1)'}/>
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
          </ImageBackground>
        </>
      ) : (
        <View style={styles.background}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
>>>>>>> 386e34e (header profile ok search screen)
=======

const Search = () => {
  return (
    <View>
      <Text>search</Text>
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
    </View>
  );
};

export default Search;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: "60%",
    height: "5%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: '"rgba(198, 198, 198, 0.5)"',
  },
  input: {
    textAlign: "center",
    zIndex: 998,
    width: "90%",
    height: "100%",
  },
  inputBtn: {
    textAlign: "center",
    alignItems: "center",
    zIndex: 999,
    width: "10%",
  },
  errorMessage: {
    color: "red",
  },
});
=======
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    height: '5%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '"rgba(198, 198, 198, 0.5)"',
    zIndex: 999,
    borderRadius: 5,
    textAlign: 'center',
  }
});
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
