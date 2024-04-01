import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

export const getCode = async () => {
  const urlRedirect = Linking.createURL("com.swiftybynaali");
  const requestUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${urlRedirect}&response_type=code&scope=public`;

  try {
    console.log(urlRedirect);//TODO: delete
    const res = await WebBrowser.openAuthSessionAsync(requestUrl, urlRedirect, {
      ASWebAuthenticationSession: false,
    });
    if (res.type !== "success") {
      throw new Error("Login failed");
    }
    const code = res.url.toString().split("code=")[1];
    console.log(code);//TODO: delete
    return code;
  } catch (error) {
    console.log(error);
    return "";
  }
};