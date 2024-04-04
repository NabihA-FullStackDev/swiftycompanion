import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import getTokenInfo from "../../requests/getTokenInfo";
import refreshToken from "../../requests/refreshToken";
import getUserProjects from "../../requests/getUserProjects";
import Project from "./Project";

const ProjectsBoard = ({ login, cursus }) => {
  const [projs, setProjs] = useState(null);
  const { token, setToken, refresh, setRefresh } = useAuth();

  const updateProj = async () => {
    if (getTokenInfo(token) < 100) {
      await refreshToken(refresh, setToken, setRefresh);
    }
    const tmp = await getUserProjects(login, token, {
      params: { page: { size: 100 } },
    });
    setProjs(
      tmp?.filter(
        (item) => item?.cursus_ids[0] === cursus && item?.status === "finished"
      )
    );
  };

  useEffect(() => {
    if (!projs) {
      updateProj();
    }
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        directionalLockEnabled={true}
      >
        {projs &&
          projs.map((proj) => {
            return (
              <Project
                key={proj.id}
                name={proj.project.name}
                mark={proj.final_mark}
                valid={proj["validated?"]}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default ProjectsBoard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(198, 198, 198, 0.5)",
    // alignItems: "center",
    // justifyContent: "center",
    flex: 0.34,
    flexDirection: "column",
    borderRadius: 10,
    marginHorizontal: 31,
  },
  scroll: {},
});
