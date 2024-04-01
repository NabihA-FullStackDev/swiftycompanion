import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProjectsBoard = () => {
  return (
    <View style={styles.root}>
      <Text>ProjectsBoard</Text>
    </View>
  );
};

export default ProjectsBoard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(198, 198, 198, 0.5)",
    alignItems: "center",
    justifyContent: "left",
    flex: 0.34,
    flexDirection: "column",
    borderRadius: 10,
    marginHorizontal: 31,
  },
});
