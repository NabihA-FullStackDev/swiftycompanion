import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";

import { useAuth } from "../../context/AuthProvider.jsx";
import getMe from "../requests/getMe.js";
import getCoaUser from "../requests/getCoaUser.js";
import HeaderProfile from "../components/profile/HeaderProfile.jsx";

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
    <View style={styles.root}>
      {profile && coalition ? (
        <>
          <ImageBackground style={styles.background} source={{ uri: coalition }}>
              <TextInput style={styles.input} placeholder="Login" autoCapitalize="none" placeholderTextColor={'rgba(1,1,1, 1)'}/>
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
