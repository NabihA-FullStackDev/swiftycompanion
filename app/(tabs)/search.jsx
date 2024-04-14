import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";
import { useRouter } from "expo-router";

import { useAuth } from "../context/AuthProvider.jsx";
import getUserByLogin from "../requests/getUserByLogin.js";
import getTokenInfo from "../requests/getTokenInfo.js";
import refreshToken from "../requests/refreshToken.js";

const Search = () => {
  const [input, setInput] = useState("");
  const [spam, setSpam] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const { token, setToken, refresh, setRefresh, profile, coalition } = useAuth();
  const [localToken, setLocalToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (localToken) {
      setToken(localToken);
    }
  }, [localToken])

  const handlePress = async () => {
    if (input) {
      const inputCheck = input.toLocaleLowerCase().trim()
      setSpam(true);
      setLoginError(false);
      setInput(inputCheck);
      if (inputCheck != '') {
        const id = await getUserByLogin(inputCheck, token);
        if (id) {
          router.push(`/components/search/${id}`);
        } else {
          setLoginError(true);
        }
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
                    onChangeText={(value) => {setLoginError(false); setInput(value)}}
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
          </ImageBackground>
        </>
      ) : (
        <View style={styles.background}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
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
