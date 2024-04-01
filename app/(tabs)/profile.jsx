import {
  View,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";

import { useAuth } from "../../context/AuthProvider.jsx";
import getMe from "../requests/getMe.js";
import getCoaUser from "../requests/getCoaUser.js";
import HeaderProfile from "../components/profile/HeaderProfile.jsx";
import SkillsBoard from "../components/profile/SkillsBoard.jsx";
import ProjectsBoard from "../components/profile/ProjectsBoard.jsx";

const Profile = () => {
  const { token, setToken, profile, setProfile, coalition, setCoalition } =
    useAuth();

  const handlePress = () => {
    setToken(null);
    setProfile(null);
    setCoalition(null);
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
          <ImageBackground style={styles.background} source={{ uri: coalition }}>
            <HeaderProfile user={profile} logoff={handlePress}/>
            <SkillsBoard/>
            <ProjectsBoard/>
          </ImageBackground>
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
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 42,
  },
});
