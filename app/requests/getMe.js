import axios from "axios";

import { CLIENT_ID, APP_SECRET } from "@env";

const getMe = async (token) => {
  const requestUrl = "/v2/me";
  try {
    const res = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`,
      },
    });
    if (res.status === 200) {
      console.log(res);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getMe;
