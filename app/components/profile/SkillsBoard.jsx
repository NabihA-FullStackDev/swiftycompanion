import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SkillsBoard = () => {
  return (
    <View style={styles.root}>
      <Text>SkillsBoard</Text>
    </View>
  );
};

export default SkillsBoard;

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
