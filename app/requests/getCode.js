import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { CLIENT_ID } from "@env";

WebBrowser.maybeCompleteAuthSession();

export const getCode = async () => {
  const urlRedirect = Linking.createURL("com.swiftybynaali");
  const requestUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${urlRedirect}&response_type=code&scope=public`;

  try {
    const res = await WebBrowser.openAuthSessionAsync(requestUrl, urlRedirect, {
      ASWebAuthenticationSession: false,
    });
    const code = await res.url.toString().split("code=")[1];
    return code;
  } catch (error) {
    console.log('getCode:', error);
  }
};
