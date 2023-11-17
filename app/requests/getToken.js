import axios from "axios";
import * as Linking from "expo-linking";

import { CLIENT_ID, APP_SECRET, SECRET } from "@env";

const getToken = async (code, setToken) => {
  const urlRedirect = Linking.createURL("com.swiftybynaali");
  const requestUrl = "/oauth/token";

  try {
    console.log(code);
    const res = await axios.post(requestUrl, {
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      client_secret: APP_SECRET,
      code: code,
      redirect_uri: urlRedirect,
    });
    if (res.status === 200) {
      console.log(res.data);
      setToken(res.data.access_token);
    }
  } catch (error) {
    console.log(urlRedirect);
    console.log(error);
  }
};

export default getToken;
