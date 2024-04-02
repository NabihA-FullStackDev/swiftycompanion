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

const UserSearched = () => {
  const [user, setUser] = useState(null);
  const [coa, setCoa] = useState(null);
  const params = useLocalSearchParams();
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    const setUserInfo = async () => {
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
          <SkillsBoard />
          <ProjectsBoard />
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
