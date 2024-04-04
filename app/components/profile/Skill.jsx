import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

const Skill = ({ name, level }) => {
  const [levelName, setLevelName] = useState("");
  const [color, setColor] = useState("black");

  const selectLevelName = () => {
    switch (true) {
      case level < 7:
        setLevelName("Junior");
        setColor("olive");
        break;
      case level < 14:
        setLevelName("Confirmé");
        setColor("green");
        break;
      case level < 21:
        setLevelName("Expert");
        setColor("orange");
        break;
      default:
        setLevelName("Maître");
        setColor("red");
        break;
    }
  };
  useEffect(() => {
    selectLevelName();
  }, []);
  return (
    <View style={styles.root}>
      <Text style={styles.name} adjustsFontSizeToFit numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.level}>
        <Text style={{ color: color, fontWeight: 700 }}>{levelName}</Text>
        <Text style={{ fontWeight: 700 }}>{level}</Text>
      </View>
    </View>
  );
};

export default Skill;

const styles = StyleSheet.create({
  root: {
    width: "auto",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255, 1)",
    borderRadius: 5,
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    paddingVertical: "1%",
    marginVertical: "1%",
    marginHorizontal: "1%",
  },
  name: {
    fontWeight: "700",
    width: 220,
  },
  level: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
