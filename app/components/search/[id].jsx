import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";
import HeaderProfile from "../profile/HeaderProfile";
import { useAuth } from "../../../context/AuthProvider";
import getUserById from "../../requests/getUserById";
import getCoaUser from "../../requests/getCoaUser";
import SkillsBoard from "../profile/SkillsBoard";
import ProjectsBoard from "../profile/ProjectsBoard";

const UserSearched = () => {
  const [user, setUser] = useState(null);
  // const [coa, setCoa] = useState(null);
  const params = useLocalSearchParams();
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    const setUserInfo = async () => {
      const search = await getUserById(params.id, token);
      setUser(search);
      if (!search) {
        router.back();
      }
    };
    setUserInfo();
  }, []);

  return (
    <View style={styles.root}>
      {user && (
        <ImageBackground style={styles.background}>
          <HeaderProfile user={user} />
          <SkillsBoard />
          <ProjectsBoard />
        </ImageBackground>
      )}
    </View>
  );
};

export default UserSearched;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#D4D4D4",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 42,
  },
});
