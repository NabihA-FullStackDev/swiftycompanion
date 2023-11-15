import axios from "axios";

import { CLIENT_ID, APP_SECRET } from "@env";

const getToken = async (code, setToken) => {
  const requestUrl = "/oauth/token";
  try {
    const res = await axios.post(requestUrl, {
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: APP_SECRET,
      code: code,
    });
    if (res.status === 200) {
      setToken(res.data.access_token);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getToken;
