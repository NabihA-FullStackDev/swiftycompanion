import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";

import { useAuth } from "../../context/AuthProvider.jsx";
import getMe from "../requests/getMe.js";
import getCoaUser from "../requests/getCoaUser.js";
import HeaderProfile from "../components/profile/HeaderProfile.jsx";

const Profile = () => {
  // const [profile, setProfile] = useState(null);
  // const [coalition, setCoalition] = useState('');
  const { token, setToken, profile, setProfile, coalition, setCoalition } = useAuth();

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
      <TouchableOpacity onPress={() => handlePress()} style={styles.logoff}>
        <FontAwesome name="power-off" size={24} color="white" />
      </TouchableOpacity>
      {(profile && coalition) ? (
        <>
          <ImageBackground style={{ flex: 1 }} source={{uri: coalition}}>
            <HeaderProfile user={profile} token={token} />
          </ImageBackground>
        </>
      ) : (
        <ActivityIndicator size={"large"} />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#D4D4D4",
  },
  logoff: {
    position: "absolute",
    top: 55,
    right: 42,
    zIndex: 999,
  },
});
