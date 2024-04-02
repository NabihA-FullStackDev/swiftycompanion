import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";
import { useRouter } from "expo-router";

import { useAuth } from "../../context/AuthProvider.jsx";
import getUserByLogin from "../requests/getUserByLogin.js";

const Search = () => {
  const [input, setInput] = useState("");
  const { token, profile, coalition } = useAuth();
  const router = useRouter();

  const getSearchInfo = async () => {};

  const handlePress = async () => {
    if (input) {
      const id = await getUserByLogin(input, token);
      if (id) {
        router.push(`/components/search/${id}`);
      }
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
              <TextInput
                style={styles.input}
                value={input}
                onChangeText={(value) => setInput(value)}
                placeholder="Login"
                autoCapitalize="none"
                placeholderTextColor={"rgba(1,1,1, 1)"}
                onSubmitEditing={handlePress}
              />
              <TouchableOpacity style={styles.inputBtn} onPress={handlePress}>
                <FontAwesome name="search" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </>
      ) : (
        <ActivityIndicator size={"large"} />
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
  },
  inputBtn: {
    textAlign: "center",
    zIndex: 999,
    width: "10%",
  },
});
