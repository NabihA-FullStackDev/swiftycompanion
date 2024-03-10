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
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('Catched error in getToken:');
    console.log(error.stack);
=======
=======
>>>>>>> 1c20ff0 (Correction request getMe)
    if (error.message.split(" ").slice(-1)[0] === "429") {
      getToken(code, setToken, setRefresh);
    }
    console.log(error);
<<<<<<< HEAD
>>>>>>> 4e95064 (Renew request for 429, add anti spam, better loading)
=======
=======
    console.log('Catched error in getToken:');
    console.log(error.stack);
>>>>>>> 26437fc (Correction request getMe)
>>>>>>> 1c20ff0 (Correction request getMe)
  }
};

export default getToken;
