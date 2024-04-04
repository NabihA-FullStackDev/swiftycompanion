import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Skill from "./Skill";

const SkillsBoard = ({ skills }) => {
  return (
    <View style={styles.root}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        directionalLockEnabled={true}
      >
        {skills && skills.map((skill) => {
          return (
            <Skill key={skill.name} name={skill.name} level={skill.level} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SkillsBoard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(198, 198, 198, 0.5)",
    flex: 0.34,
    flexDirection: "column",
    borderRadius: 10,
    marginHorizontal: 31,
  },
});
