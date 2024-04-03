import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";

const SkillsBoard = ({ skills }) => {
  return (
    <View style={styles.root}>
      <ScrollView>
      </ScrollView>
    </View>
  );
};

export default SkillsBoard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(198, 198, 198, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.34,
    flexDirection: "column",
    borderRadius: 10,
    marginHorizontal: 31,
  },
});
