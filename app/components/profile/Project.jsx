import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const Project = ({ name, mark, valid }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.name} adjustsFontSizeToFit numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.mark}>
        {mark} {valid ? <Text>✅</Text> : <Text>❌</Text>}
      </Text>
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  root: {
    width: "auto",
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255, 1)",
    borderRadius: 5,
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    paddingVertical: '1%',
    marginVertical: "1%",
    marginHorizontal: "1%",
  },
  name: {
    fontWeight: "500",
    width: 200,
  },
});
