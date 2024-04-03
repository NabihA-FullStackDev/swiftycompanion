import {
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import HeaderProfile from "../profile/HeaderProfile";
import { useAuth } from "../../../context/AuthProvider";
import getUserById from "../../requests/getUserById";
import getCoaUser from "../../requests/getCoaUser";
import SkillsBoard from "../profile/SkillsBoard";
import ProjectsBoard from "../profile/ProjectsBoard";
import getTokenInfo from "../../requests/getTokenInfo";
import refreshToken from "../../requests/refreshToken";

const UserSearched = () => {
  const [user, setUser] = useState(null);
  const [coa, setCoa] = useState(null);
  const params = useLocalSearchParams();
  const router = useRouter();
  const { token, setToken, refresh, setRefresh } = useAuth();

  useEffect(() => {
    const setUserInfo = async () => {
      if (getTokenInfo(token) < 100)
        refreshToken(refresh, setToken, setRefresh);
      const search = await getUserById(params.id, token);
      if (search) {
        await getCoaUser(search.id, token, setCoa);
      }
      setUser(search);
      if (!search) {
        router.back();
      }
    };
    setUserInfo();
  }, []);

  return (
    <View style={styles.root}>
      {user && coa ? (
        <ImageBackground style={styles.background} source={{ uri: coa }}>
          <HeaderProfile user={user} />
          <SkillsBoard skills={user?.cursus_users[2]?.skills}/>
          <ProjectsBoard login={user?.login} cursus={user?.cursus_users[2]?.cursus?.id}/>
        </ImageBackground>
      ) : (
        <View style={styles.background}>
          <ActivityIndicator size={'large'}/>
        </View>
      )}
    </View>
  );
};

export default UserSearched;

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
});
