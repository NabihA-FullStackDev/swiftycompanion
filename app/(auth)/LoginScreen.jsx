import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
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
    <View style={styles.root}>
      <ImageBackground style={styles.background} source={require('../../assets/Background.jpeg')}>
        <TouchableOpacity
          onPress={() => handlePress()}
          style={styles.buttonLogin}
        >
          <Text style={styles.textLogin}>{`Log with 42`}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    width: 190,
    height: 63,
    flexShrink: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(217, 217, 217, 0.45098039507865906)",
  },
  textLogin: {
    width: 190,
    height: 42,
    flexShrink: 0,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: 5,
  },
});
