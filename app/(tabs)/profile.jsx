import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";

import { useAuth } from "../context/AuthProvider.jsx";
import getMe from "../requests/getMe.js";
import getCoaUser from "../requests/getCoaUser.js";
import HeaderProfile from "../components/profile/HeaderProfile.jsx";
import SkillsBoard from "../components/profile/SkillsBoard.jsx";
import ProjectsBoard from "../components/profile/ProjectsBoard.jsx";
import refreshToken from "../requests/refreshToken.js";
import getTokenInfo from "../requests/getTokenInfo.js";
import checkCurcus from "../utils/checkCurcus.js"

const Profile = () => {
  let c = -1;
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

  const handlePress = () => {
    setToken(null);
    setProfile(null);
    setCoalition(null);
  };

  useEffect(() => {
    if (!profile && token) {
      if (getTokenInfo(token) < 100)
        refreshToken(refresh, setToken, setRefresh);
      getMe(token, setProfile);
      }
    if (profile && token) {
      if (getTokenInfo(token) < 100)
        refreshToken(refresh, setToken, setRefresh);
      getCoaUser(profile.id, token, setCoalition);
    }
  }, [profile]);

  return (
    <View style={styles.root}>
      {profile && coalition ? (
        <ImageBackground style={styles.background} source={{ uri: coalition }}>
          <HeaderProfile user={profile} logoff={handlePress} />
          { (c = checkCurcus(profile?.cursus_users)) !== -1 ?
          <>
          <SkillsBoard skills={profile?.cursus_users[c]?.skills}/>
          <ProjectsBoard login={profile?.login} cursus={profile?.cursus_users[c]?.cursus?.id}/>
          </>
          : <Text style={styles.nocursus}>No Cursus Available</Text>}
        </ImageBackground>
      ) : (
        <View style={styles.background}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
    </View>
  );
};


export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 42,
  },
  nocursus: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 63
  }
});
