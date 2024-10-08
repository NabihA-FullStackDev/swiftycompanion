import axios from "axios";

import { CLIENT_ID, APP_SECRET } from "@env";

const refreshToken = async (refresh_token, setToken, setRefresh) => {
  const requestUrl = "/oauth/token";

  try {
    const res = await axios.post(requestUrl, {
      grant_type: "refresh_token",
      client_id: CLIENT_ID,
      client_secret: APP_SECRET,
      refresh_token: refresh_token,
    });
    if (res.status === 200) {
      setToken(res.data.access_token);
      setRefresh(res.data.refresh_token);
    }
  } catch (error) {
    if (error.message.split(" ").slice(-1)[0] === "429") {
      refreshToken(code, setToken, setRefresh);
    }
    if (error.response) {
      console.log('refreshToken Error.res:', error.response)
    } else
    console.log('refreshToken Error:', error);
  }
};

export default refreshToken;
