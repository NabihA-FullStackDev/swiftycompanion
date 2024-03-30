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
  TouchableOpacity,
>>>>>>> 386e34e (header profile ok search screen)
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";
<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";
>>>>>>> 386e34e (header profile ok search screen)

import { useAuth } from "../../context/AuthProvider.jsx";
import getMe from "../requests/getMe.js";
import getCoaUser from "../requests/getCoaUser.js";
import HeaderProfile from "../components/profile/HeaderProfile.jsx";
<<<<<<< HEAD
import SkillsBoard from "../components/profile/SkillsBoard.jsx";
import ProjectsBoard from "../components/profile/ProjectsBoard.jsx";
import refreshToken from "../requests/refreshToken.js";
import getTokenInfo from "../requests/getTokenInfo.js";

const Profile = () => {
  const {
    token,
    setToken,
    refresh,
    setRefresh,
    profile,
    setProfile,
    coalition,
    setCoalition,
  } = useAuth();
=======

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [coalition, setCoalition] = useState('');
  const { token, setToken } = useAuth();
>>>>>>> 386e34e (header profile ok search screen)

  const handlePress = () => {
    setToken(null);
    setProfile(null);
    setCoalition(null);
  };

  useEffect(() => {
    if (!profile && token) {
<<<<<<< HEAD
      if (getTokenInfo(token) < 100)
        refreshToken(refresh, setToken, setRefresh);
      getMe(token, setProfile);
    }
    if (profile && token) {
      if (getTokenInfo(token) < 100)
        refreshToken(refresh, setToken, setRefresh);
=======
      getMe(token, setProfile);
    }
    if (profile && token) {
>>>>>>> 386e34e (header profile ok search screen)
      getCoaUser(profile.id, token, setCoalition);
    }
  }, [profile]);

<<<<<<< HEAD
  return (
    <View style={styles.root}>
      {profile && coalition ? (
        <ImageBackground style={styles.background} source={{ uri: coalition }}>
          <HeaderProfile user={profile} logoff={handlePress} />
<<<<<<< HEAD
          <SkillsBoard skills={profile.cursus_users[2].skills}/>
          <ProjectsBoard login={profile.login} cursus={profile?.cursus_users[2].cursus.id}/>
        </ImageBackground>
      ) : (
        <View style={styles.background}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
=======
import { View, Text } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View>
      <Text>profile</Text>
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
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
=======
          <SkillsBoard />
          <ProjectsBoard />
        </ImageBackground>
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
      ) : (
        <View style={styles.background}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
    </View>
  );
};

export default Profile;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 42,
  },
});
=======
<<<<<<< HEAD
>>>>>>> 934d90e (Review views (Login/NavBar profile/Search))
=======
    backgroundColor: "#D4D4D4",
  },
  logoff: {
    position: "absolute",
    top: 55,
    right: 42,
    zIndex: 999,
  },
});
>>>>>>> 386e34e (header profile ok search screen)
=======
>>>>>>> 2145d28 (Review views (Login/NavBar profile/Search))
>>>>>>> df16014 (Review views (Login/NavBar profile/Search))
