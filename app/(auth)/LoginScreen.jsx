import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

import { getCode } from "../requests/getCode.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import getToken from "../requests/getToken.js";

const LoginScreen = () => {
  const { setToken } = useAuth();

  const handlePress = async () => {
    try {
      const code = await getCode();
      if (code !== "") {
        await getToken(code, setToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => handlePress()}
        style={styles.buttonLogin}
      >
        <Text style={styles.textLogin}>{`Log with 42`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create((theme) => ({
  buttonLogin: {
    width: 190,
    height: 42,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.45098039507865906)",
  },
  textLogin: {
    width: 168,
    height: 42,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    color: "rgba(0, 0, 255, 1)",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "400",
  },
}));
