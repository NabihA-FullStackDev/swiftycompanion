import axios from "axios";
import * as Linking from "expo-linking";

import { CLIENT_ID, APP_SECRET } from "@env";

const getToken = async (code, setToken, setRefresh) => {
  const urlRedirect = Linking.createURL("com.swiftybynaali");
  const requestUrl = "/oauth/token";

  try {
    const res = await axios.post(requestUrl, {
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      client_secret: APP_SECRET,
      code: code,
      redirect_uri: urlRedirect,
    });
    if (res.status === 200) {
      setToken(res.data.access_token);
      setRefresh(res.data.refresh_token);
    }
  } catch (error) {
    if (error.message.split(" ").slice(-1)[0] === "429") {
      getToken(code, setToken, setRefresh);
    }
    console.log('getToken:', error);
  }
};

export default getToken;
