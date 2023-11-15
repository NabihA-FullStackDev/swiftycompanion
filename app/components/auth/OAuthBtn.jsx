import { View, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { CLIENT_ID } from "@env";
import styles from "./oauthBtn";

WebBrowser.maybeCompleteAuthSession();

const OAuthBtn = ({ setCode }) => {
  const urlRedirect = Linking.createURL("com.swiftybynaali");
  const requestUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${urlRedirect}&response_type=code`;

  const handlePress = async () => {
    try {
      console.log(urlRedirect);
      const res = await WebBrowser.openAuthSessionAsync(
        requestUrl,
        urlRedirect,
        { ASWebAuthenticationSession: false }
      );
      if (res.type === "success") {
        const code = res.url.toString().split("code=")[1];
        setCode(code);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => handlePress()} style={styles.buttonAuth}>
        <Text style={{ fontSize: 30 }}>LOGIN ^_^</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OAuthBtn;
